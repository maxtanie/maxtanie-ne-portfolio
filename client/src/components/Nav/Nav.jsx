import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
	render() {
		const navLinksDefault = [
			{
				linkUrl: 'section-about',
				linkName: 'About',
			},
			{
				linkUrl: 'section-portfolio',
				linkName: 'Portfolio',
			},
			{
				linkUrl: 'section-skills',
				linkName: 'Skills',
			},
			{
				linkUrl: 'section-contact',
				linkName: 'Contact',
			},
		];

		const navLinksSecond = [];

		const navLinksThird = [];

		const defaultLink = navLinksDefault.map((links, index) => {
			return (
				<li className="list-items">
					<Link
						key={index}
						activeClass="active"
						to={links.linkUrl}
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						{links.linkName}
					</Link>
				</li>
			);
		});

		const secondLink = navLinksSecond.map((links, index) => {
			return (
				<li className="list-items">
					<Link
						key={index}
						activeClass="active"
						to={links.linkUrl}
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						{links.linkName}
					</Link>
				</li>
			);
		});

		const thirdLink = navLinksThird.map((links, index) => {
			return (
				<li className="list-items">
					<Link
						key={index}
						activeClass="active"
						to={links.linkUrl}
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						{links.linkName}
					</Link>
				</li>
			);
		});

		const location = window.location.pathname;

		const nav = () => {
			if (location === '/') {
				return defaultLink;
			} else if (location === '/about-read-more') {
				return thirdLink;
			} else if (location.includes('/portfolio')) {
				return secondLink;
			} else {
				return '';
			}
		};

		return (
			<nav className={`nav`}>
				<ul className="flex-items-center container-700-px">
					<li className="list-items">
						<NavLink to="/">Home</NavLink>
					</li>
					{nav()}
				</ul>
			</nav>
		);
	}
}
