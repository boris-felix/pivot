import React, { PropTypes } from 'react';
const { string, number } = PropTypes;

const AccountItem = ({ name, interest_rate, interest_type, minimum_deposit }) => {
	return (
		<tr>
			<td className="col-md-4">{name}</td>
			<td className="col-md-4">{interest_rate}%</td>
			<td className="col-md-4">£{minimum_deposit}</td>
			<td className="col-md-4">{interest_type}</td>
		</tr>
	);
}

AccountItem.PropTypes = {
	name: string.isRequired,
	interest_type: string.isRequired,
	interest_rate: string.isRequired,
	minimum_deposit: number.isRequired
}

export default AccountItem;