import * as React from 'react';
import {IFxMatrix} from './api/fx-matrix';

interface IProps {
	fxMatrix: IFxMatrix;
}

interface IState {}

export class FxMatrix extends React.Component<IProps, IState> {
	
	render() {
		let currencyCodes = Object.keys(this.props.fxMatrix);
		let headingCells = currencyCodes.map(c => <th>{c}</th>);
		let rows = currencyCodes.map(c => {
			let rates = this.props.fxMatrix[c];
			let cells = currencyCodes.map(c => <td>{rates[c]}</td>);

			return (
				<tr>
					<td>{c}</td>
					{cells}
				</tr>
			);
		});

		return (
			<table>
				<thead>
					<tr>
						<td>Base Currency</td>
						{headingCells}
					</tr>
				</thead>

				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}