import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import infos from './infos';
import './BoxCreations.scss';

export default class BoxCreations extends Component {
	state = {
		vals: infos,
		creations: '',
	};

	render() {
		return (
			<article className={`filter-item box-creations ${this.props.filterItem}`}>
				<img src={this.props.image} alt="" />

				<aside className={`creations`}>
					<div className="bloc-infos">
						<h5 className="id-creations">0{this.props.id}</h5>
						<div className="infos">
							<h2>{this.props.titleCreations}</h2>
							<p class="title-creations">{this.props.title}</p>
							<p className="txt-creations">
								Un design qui est inspiré du verset de Jean 13 : 6 de la Bible
							</p>
						</div>
					</div>
					<a className="link-read-more" href={`/portfolio/${this.props.titleCreations.toLowerCase()}`}>
						Voir plus...
					</a>
				</aside>
			</article>
		);
	}
}
