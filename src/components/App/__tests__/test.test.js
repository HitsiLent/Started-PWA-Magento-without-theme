
import React from 'react';
import App from '../app';
import { shallow } from 'enzyme';



import ErrorNotifications from 'src/components/App/errorNotifications';


jest.mock('src/components/App/errorNotifications', );
describe('App', () => {
  it('should have not the `th` "Items"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.contains(<th>Items</th>)
    ).toBe(false);
  });
});
