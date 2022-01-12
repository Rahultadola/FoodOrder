import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import image from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeal</h1>
				<HeaderCartButton onClick={props.onShowCart}/>
			</header>
			<div className={classes['main-image']}>
				<img src={image}/>
			</div>
		</Fragment>
	);
};

export default Header;