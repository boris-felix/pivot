import React, { Component, PropTypes } from 'react';
import * as Actions from '../actionsCreator';

const { string, number } = PropTypes;

class Saving extends Component {
	selectSaving (dispatch, index) {
		dispatch(Actions.selectSaving({ index }));
	}

	render () {
		const {
			dispatch,
			index,
			name,
			interest_rate,
			interest_type,
			minimum_deposit,
			selected,
			isPrevious,
			isNext
		} = this.props;
		const itemCssClass = [
			'saving',
			index % 2 ? 'odd' : 'even',
			selected ? 'selected' : '',
			isPrevious ? 'previous' : '',
			isNext ? 'next' : ''
		].join(' ');
		const columnCssClass = selected ? 'col-md-4 col-sd-12 col-xs-12' : 'col-md-4 hidden-sd hidden-xs';
		const cssLinkClass = 'saving--name col-md-4 col-sd-12 col-xs-12';
		const previousSign = isPrevious ? (<span className="direction--sign">&lt;&nbsp;</span>) : '';
		const nextSign = isNext ? (<span className="direction--sign">&nbsp;&gt;</span>) : '';

		return (
			<tr className={itemCssClass} onClick={this.selectSaving.bind(this, dispatch, index)}>
				<td onClick={this.selectSaving.bind(this, dispatch, index)} className={cssLinkClass}>
					{previousSign}{name}{nextSign}
				</td>
				<td className={`interest_rate ${columnCssClass}`}>{interest_rate}%</td>
				<td className={`minimum_deposit ${columnCssClass}`}>£{minimum_deposit}</td>
				<td className={`interest_type ${columnCssClass}`}>{interest_type}</td>
			</tr>
		);
	}
}

Saving.PropTypes = {
	name: string.isRequired,
	interest_type: string.isRequired,
	interest_rate: string.isRequired,
	minimum_deposit: number.isRequired
}.isRequired

export default Saving;