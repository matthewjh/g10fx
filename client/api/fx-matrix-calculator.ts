export interface IFxRates {
	[currency: string]: number;
}

export interface IFxMatrix {
	[currency: string]: IFxRates;
}

export class FxMatrixCalculator {
	calculateMatrix(baseCurrency: string, rates: IFxRates): IFxMatrix {
		return {};
	}
}