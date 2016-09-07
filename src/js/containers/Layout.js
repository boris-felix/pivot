import React, { Component } from 'react';
import { connect } from 'react-redux';
import Saving from '../components/Saving';

const Data = [
	{
		name: 'Fixed saver',
		interest_rate: '1.2',
		minimum_deposit: 500,
		interest_type: 'Fixed'
	},
	{
		name: 'Flexed saver',
		interest_rate: '1.2',
		minimum_deposit: 200,
		interest_type: 'Tracker'
	},
	{
		name: 'Fixed saver',
		interest_rate: '1.2',
		minimum_deposit: 550,
		interest_type: 'Fixed'
	},
	{
		name: 'Fixed saver',
		interest_rate: '1.2',
		minimum_deposit: 800,
		interest_type: 'Fixed'
	}
];

class Layout extends Component {
	render () {
		const { dispatch, isSelected, previous, next } = this.props; 

		return (
			<div>
				<h1>Saving accounts</h1>
				<table className="table">
					<thead>
						<tr className="grid--header hidden-sd hidden-xs">
							<th className="col-md-4">Product</th>
							<th className="col-md-4">Interest rate</th>
							<th className="col-md-4">Minimum deposit</th>
							<th className="col-md-4">Interest type</th>
						</tr>
					</thead>
					<tbody>
						{Data.map((data, id) => {
							const selected = isSelected == id;
							const isPrevious = previous == id && isSelected !== id;
							const isNext = next == id;

							return (
								<Saving 
									selected={selected}
									isPrevious={isPrevious}
									isNext={isNext}
									dispatch={dispatch}
									key={id}
									index={id}
									{...data}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = ({ savings: { selected, previous, next } }) => ({
	isSelected: selected,
	next,
	previous
});

const Container = connect(mapStateToProps)(Layout);

export default Container;