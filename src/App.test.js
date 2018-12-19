import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Catalog from './components/Catalog/Catalog.component';
import App, {Header} from './App';

configure({ adapter: new Adapter() });

describe('<App/> shallow rendering', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App/>);

    expect(wrapper.find(Header).children().text()).toBe('Catalog Products');
    expect(wrapper.find(Catalog).length).toBe(1);
  });
});
