import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import FilterByBrand, { Select } from './Filter.component';
import productsList from '../../productsList';

configure({ adapter: new Adapter() });

function setup(addedProps = {}, render = shallow) {
  const props = {
    products: productsList,
    ...addedProps
  };
  return render(<FilterByBrand {...props} />);
}

describe('<FilterByBrand/> shallow rendering', () => {
  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper.find(Select).length).toBe(1);
  });
  it('should have a <p> with the correct text', () => {
    const wrapper = setup();

    expect(wrapper.find('p').text()).toBe('Filter by brand:');
  });
  it('should show All as first selected option', () => {
    const wrapper = setup();
    const defaultOptionSelected = wrapper.find(Select).children().first();

    expect(defaultOptionSelected.text()).toBe('All');
    expect(defaultOptionSelected.props().value).toEqual("");
  });
  it('should update the brand selected onChange', () => {
    const handleSelectChange = jest.fn();
    const value = 'emporio-armani';
    const wrapper = setup({ handleSelectBrand: handleSelectChange});

    expect(wrapper.find(Select).length).toBe(1);
    wrapper.find(Select).simulate('change', {target: { value }});
    expect(handleSelectChange).toHaveBeenCalledTimes(1);
    expect(handleSelectChange).toBeCalledWith(value);
  })
});