import {FxMatrixCalculator} from './fx-matrix-calculator';

describe('FxMatrixCalculator', () => {
	let fxMatrixCalculator: FxMatrixCalculator;

	beforeEach(() => {
		fxMatrixCalculator = new FxMatrixCalculator();
	});

	it('should correctly calculate an fx matrix', () => {
		let baseCurrency = 'GBP';
		let rates = {
			USD: 1.24,
			EUR: 1.5,
			AUD: 1.15
		};
		let matrix = fxMatrixCalculator.getMatrix(baseCurrency, rates);

		expect(matrix).toEqual({
			USD: {''}
		});
	});
});