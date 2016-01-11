import * as React from 'react';
import {IFxMatrixApi, FxMatrixApi, IFxMatrix} from './api/fx-matrix';
import {FxMatrix} from './fx-matrix';

interface IProps {}
interface IState {
	fxMatrix: IFxMatrix;
}

export class App extends React.Component<IProps, IState> {
	private _fxMatrixApi: IFxMatrixApi;

	constructor() {
		super();

		this.state = {
			fxMatrix: {}
		};

		this._fxMatrixApi = new FxMatrixApi();	
	}

	componentDidMount() {
		this._fxMatrixApi.getFxMatrix(['GBP', 'USD', 'AUD', 'CAD', 'JPY', 'NZD', 'EUR', 'CHF', 'SEK', 'NOK']).then(fxMatrix => {
			this.setState({
 				fxMatrix: fxMatrix
			});
		});
	}

	render() {
		return (
			<FxMatrix fxMatrix={this.state.fxMatrix}></FxMatrix>
		);
	}
}