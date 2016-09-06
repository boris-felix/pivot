import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountItem from '../components/AccountItem';

const Data = [
	{
		name: 'toto',
		interest_rate: '1.2',
		minimum_deposit: 500,
		interest_type: 'toto'
	},
	{
		name: 'toto',
		interest_rate: '1.2',
		minimum_deposit: 500,
		interest_type: 'toto'
	},
	{
		name: 'toto',
		interest_rate: '1.2',
		minimum_deposit: 500,
		interest_type: 'toto'
	},
	{
		name: 'toto',
		interest_rate: '1.2',
		minimum_deposit: 500,
		interest_type: 'toto'
	}
];

class Layout extends Component {
	render () {
		return (
			<div>
				<h1>Saving accounts</h1>
				<table className="table">
					<thead>
						<tr className="grid--header">
							<th className="col-md-4">Product</th>
							<th className="col-md-4">Interest rate</th>
							<th className="col-md-4">Minimum deposit</th>
							<th className="col-md-4">Interest type</th>
						</tr>
					</thead>
					<tbody>
						{Data.map((data) => <AccountItem {...data} />)}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = () => ({});

const Container = connect(mapStateToProps)(Layout);

export default Container;