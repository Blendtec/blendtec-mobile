import { CookTimePipe }             from './cook-time';
import { NutrientMeasurementPipe }  from './nutrient-measurement';

export {
	CookTimePipe,
	NutrientMeasurementPipe
}

export const RECIPE_PIPES = [
	CookTimePipe,
	NutrientMeasurementPipe
];
