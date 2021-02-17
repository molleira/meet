// src/__tests__/NumberOfEvents.test.js

import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  // input element exists
  test('render number of events div', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  // element with class exists
  test('render number of events label', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-label')).toHaveLength(1);
  });

  // element to select number of events exist
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
  });

  // verfies if number of events is correct
  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(numberOfEvents);
  });

  // change state when user selects number
  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: '32',
    });
    const eventObject = { target: { value: '20' } };
    NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('20');
  });
});