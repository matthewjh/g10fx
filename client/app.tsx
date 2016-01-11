import * as React from 'react';
import {IFxMatrixApi, FxMatrixApi, IFxMatrix} from './api/fx-matrix';
import {FxMatrix} from './fx-matrix';
import {G10_CURRENCY_CODES, UPDATE_FREQUENCY} from './config';

interface IProps {}
interface IState {
	fxMatrix: IFxMatrix;
	lastRefreshedDate: Date;
}

export class App extends React.Component<IProps, IState> {
	private _fxMatrixApi: IFxMatrixApi;
	private _updateIntervalRef: number;

	constructor() {
		super();

		this.state = {
			fxMatrix: {},
			lastRefreshedDate: null
		};

		this._fxMatrixApi = new FxMatrixApi();	
	}

	componentDidMount() {
		this._update();

		this._updateIntervalRef = setInterval(() => {
			this._update();
		}, UPDATE_FREQUENCY);
	}

	componentWillUnmount() {
		clearInterval(this._updateIntervalRef);
	}

	render() {
		let lastRefreshString = this.state.lastRefreshedDate ? this.state.lastRefreshedDate.toString() : '';
		
		return (
			<div>
				<h1>G10 Fx Currency Pairs</h1>
				<p>Last refreshed at: {lastRefreshString}</p>
				<FxMatrix fxMatrix={this.state.fxMatrix}></FxMatrix>
			</div>
		);
	}

	private _update() {
		this._fxMatrixApi.getFxMatrix(G10_CURRENCY_CODES).then(fxMatrix => {
			this.setState({
 				fxMatrix: fxMatrix,
 				lastRefreshedDate: new Date()
			});
		});
	}
}