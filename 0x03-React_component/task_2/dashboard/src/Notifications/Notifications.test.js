import React from 'react';
import { shallow } from 'enzyme';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notification tests', () => {
  it('renders Notification component without crashing', () => {
    const component = shallow(<Notifications />);

    expect(component).toBeDefined();
  });

  it('renders correct list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul').children()).toHaveLength(3);
    expect(wrapper.find('ul').childAt(0).html()).toEqual(
      '<li data="default">New course available</li>'
    );
    expect(wrapper.find('ul').childAt(1).html()).toEqual(
      '<li data="urgent">New resume available</li>'
    );
    expect(wrapper.find('ul').childAt(2).html()).toEqual(
      `<li data=\"urgent\">${getLatestNotification()}</li>`
    );
  });

  it('renders an unordered list', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul').children()).toHaveLength(3);
    wrapper.find('ul').forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it('renders correct text', () => {
    const component = shallow(<Notifications />);

    expect(component.find('p').prop('children')).toBe(
      'Here is the list of notifications'
    );
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
  });

  it("does not display notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("does not display menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
  });

  it("displays Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });

  describe('markAsRead functionality', () => {
    it('logs the correct message when markAsRead is called', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const instance = wrapper.instance();

      instance.markAsRead(1);

      expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
      consoleSpy.mockRestore();
    });
  });
});