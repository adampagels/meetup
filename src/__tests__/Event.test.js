import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<App /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    });

    test('render event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('render event info', () => {
        expect(EventWrapper.find('.event-info')).toHaveLength(1);
    });

    test('render event-name', () => {
        expect(EventWrapper.find('.event-name')).toHaveLength(1);
    });

    test('render children of event-info', () => {
        expect(EventWrapper.find('.event-info').children()).toHaveLength(3);
    });
});