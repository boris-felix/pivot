import React, { Component, PropTypes } from 'react';
import * as Actions from '../actionCreators';

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
		const columnCssClass = 'col-md-4 col-sd-4 col-xs-4';

		return (
			<tr className={itemCssClass} onClick={this.selectSaving.bind(this, dispatch, index)}>
				<td className="col-md-4 col-sd-4 col-xs-4">{name}</td>
				<td className={columnCssClass}>{interest_rate}%</td>
				<td className={columnCssClass}>£{minimum_deposit}</td>
				<td className={columnCssClass}>{interest_type}</td>
			</tr>
		);
	}
}

Saving.PropTypes = {
	name: string.isRequired,
	interest_type: string.isRequired,
	interest_rate: string.isRequired,
	minimum_deposit: number.isRequired
}

export default Saving;