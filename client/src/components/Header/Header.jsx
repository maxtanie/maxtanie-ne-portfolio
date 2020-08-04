import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';

export default class Header extends Component {
	render() {
		return (
			<header id="bg-header">
				<div className="container-700-px center absolute-center">
					<h1 className="title orange orange-triangle">Hello,</h1>
					<p className="txt-header regular">
						Je m'appelle Maxtanie Petit Dol, j'ai 24 ans, je suis un Webdesigner et une développeuse front
						end junior située à Paris.
					</p>
					<Link className="decoration-none center">
						<Button
							width="200px"
							background="#FC3000"
							color="#fff"
							btnName="Télécharger mon CV"
							mTop="30"
						/>
					</Link>
				</div>
			</header>
		);
	}
}
