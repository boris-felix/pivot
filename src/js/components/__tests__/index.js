import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Saving from '../Saving';

chai.use(chaiEnzyme());

describe('<Saving />', () => {

	describe('with default props', () => {
		const props = {
			name: 'foo',
			interest_type: 'bar',
			interest_rate: '1.2',
			minimum_deposit: 400
		};

		const wrapper = shallow(<Saving {...props} />);

		it('should render a four colum row', () => {
			expect(wrapper.find('td').at(0)).to.have.text('foo');
			expect(wrapper.find('td').at(1)).to.have.text('1.2%');
			expect(wrapper.find('td').at(2)).to.have.text('£400');
			expect(wrapper.find('td').at(3)).to.have.text('bar');
		});

		it('should not have selected css class name', () => {
			expect(wrapper).to.not.have.className('selected');
		});

		it('should not have previous css class name', () => {
			expect(wrapper).to.not.have.className('previous');
		});

		it('should not have next css class name', () => {
			expect(wrapper).to.not.have.className('next');
		});

		it('should have colums with the right css classes', () => {
			expect(wrapper.find('td').at(0)).to.have.className('col-md-4 col-sd-12 col-xs-12');
			expect(wrapper.find('td').at(1)).to.have.className('col-md-4 hidden-sd hidden-xs');
			expect(wrapper.find('td').at(2)).to.have.className('col-md-4 hidden-sd hidden-xs');
			expect(wrapper.find('td').at(3)).to.have.className('col-md-4 hidden-sd hidden-xs');
		});

		it('should not have any previous or next sign', () => {
			expect(wrapper.find('.direction--sign')).to.not.exist;
		});
	});

	describe('with selected props', () => {
		const props = {
			name: 'foo',
			interest_type: 'bar',
			interest_rate: '1.2',
			minimum_deposit: 400,
			selected: true
		};

		const wrapper = shallow(<Saving {...props} />);

		it('should show if a row is selected', () => {
			expect(wrapper).to.have.className('selected');
		});

		it('should have colums with the right css classes', () => {
			expect(wrapper.find('td').at(0)).to.have.className('col-md-4 col-sd-12 col-xs-12');
			expect(wrapper.find('td').at(1)).to.have.className('col-md-4 col-sd-12 col-xs-12');
			expect(wrapper.find('td').at(2)).to.have.className('col-md-4 col-sd-12 col-xs-12');
			expect(wrapper.find('td').at(3)).to.have.className('col-md-4 col-sd-12 col-xs-12');
		});

		it('should not have any previous or next sign', () => {
			expect(wrapper.find('.direction--sign')).to.not.exist;
		});

		it('should not have previous css class name', () => {
			expect(wrapper).to.not.have.className('previous');
		});

		it('should not have next css class name', () => {
			expect(wrapper).to.not.have.className('next');
		});
	});

	describe('with previous props', () => {
		const props = {
			name: 'foo',
			interest_type: 'bar',
			interest_rate: '1.2',
			minimum_deposit: 400,
			isPrevious: true
		};

		const wrapper = shallow(<Saving {...props} />);

		it('should show if a row is selected', () => {
			expect(wrapper).to.have.className('previous');
		});

		it('should have colums with the right css classes', () => {
			expect(wrapper.find('td').at(0)).to.have.className('col-md-4 col-sd-12 col-xs-12');
			expect(wrapper.find('td').at(1)).to.have.className('col-md-4 hidden-sd hidden-xs');
			expect(wrapper.find('td').at(2)).to.have.className('col-md-4 hidden-sd hidden-xs');
			expect(wrapper.find('td').at(3)).to.have.className('col-md-4 hidden-sd hidden-xs');
		});

		it('should not have any previous or next sign', () => {
			expect(wrapper.find('.direction--sign')).to.exist;
			expect(wrapper.find('.direction--sign')).to.have.text('< ');
		});
	});

	describe('with next props', () => {
		const props = {
			name: 'foo',
			interest_type: 'bar',
			interest_rate: '1.2',
			minimum_deposit: 400,
			isNext: true
		};

		const wrapper = shallow(<Saving {...props} />);

		it('should show if a row is selected', () => {
			expect(wrapper).to.have.className('next');
		});

		it('should have colums with the right css classes', () => {
			expect(wrapper.find('td').at(0)).to.have.className('col-md-4 col-sd-12 col-xs-12');
			expect(wrapper.find('td').at(1)).to.have.className('col-md-4 hidden-sd hidden-xs');
			expect(wrapper.find('td').at(2)).to.have.className('col-md-4 hidden-sd hidden-xs');
			expect(wrapper.find('td').at(3)).to.have.className('col-md-4 hidden-sd hidden-xs');
		});

		it('should not have any previous or next sign', () => {
			expect(wrapper.find('.direction--sign')).to.exist;
			expect(wrapper.find('.direction--sign')).to.have.text(' >');
		});
	});
});

