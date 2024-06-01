
import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders NotificationItem component without crashing', () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ type: 'default', value: 'test' });
    expect(wrapper.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: '<u>test</u>' });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });

  it('passes markAsRead to NotificationItem and handles click', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const notificationItem = wrapper.find(NotificationItem).at(2);

    expect(notificationItem.prop('markAsRead')).toBe(wrapper.instance().markAsRead);

    const consoleSpy = jest.spyOn(console, 'log');
    notificationItem.simulate('click');

    expect(consoleSpy).toHaveBeenCalledWith('Notification 3 has been marked as read');
    consoleSpy.mockRestore();
  });
});
