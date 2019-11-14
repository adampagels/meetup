import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render input container', () => {
        expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
    });

    test('render input field', () => {
        const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('#event-number').prop('value')).toBe(numberOfEvents);
    });
});