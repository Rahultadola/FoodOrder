import React, { Fragment } from 'react';

import AvilableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';


const Meals = () => {
	return <Fragment>
		<MealsSummary />
		<AvilableMeals />
	</Fragment>;
};

export default Meals;