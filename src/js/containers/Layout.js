import React, { Component } from 'react';
import { connect } from 'react-redux';
import Saving from '../components/Saving';

class Layout extends Component {
	render () {
		const { dispatch, isSelected, previous, next, savings } = this.props; 

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
						{savings.map((data, id) => {
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

const mapStateToProps = ({ savings, gridstate: { selected, previous, next } }) => ({
	isSelected: selected,
	next,
	previous,
	savings
});

const Container = connect(mapStateToProps)(Layout);

export default Container;