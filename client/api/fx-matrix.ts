import * as axios from 'axios';

export interface IFxRates {
	[currency: string]: number;
}

export interface IFxMatrix {
	[currency: string]: IFxRates;
}

export interface IFxMatrixApi {
	getFxMatrix(currencies: string[]): Promise<IFxMatrix>;
}

interface IWebServiceResponse {
	base: string;
	date: string;
	rates: IFxRates;
}

export class FxMatrixApi implements IFxMatrixApi {
	getFxMatrix(currencies: string[]): Promise<IFxMatrix> {
		let fxResponsePromises = currencies.map(c => this._getResponseForBaseCurrency(c));

		return Promise.all(fxResponsePromises).then(responses => {
			let matrix: IFxMatrix = {};

			responses.forEach(r => {
				// filter the rates from the api to only include the specified currencies
				let relevantCurrencyCodes = Object.keys(r.rates).filter(c => currencies.indexOf(c) !== -1); 
				let relevantRates = <IFxRates>{};

				relevantCurrencyCodes.forEach(c => {
					relevantRates[c] = r.rates[c];
				});

				// the rate for base/base is 1
				relevantRates[r.base] = 1;

				matrix[r.base] = relevantRates;
			})

			return matrix;
		});
	}

	private _getResponseForBaseCurrency(baseCurrency: string): Promise<IWebServiceResponse> {
		let url = `http://api.fixer.io/latest?base=${baseCurrency}`;

		return axios.get(url).then(response => {
			return <IWebServiceResponse>response.data;
		});
	}
}