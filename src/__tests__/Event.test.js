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

    test('render event-overview', () => {
        expect(EventWrapper.find('.event-overview')).toHaveLength(1);
    });

    test('render event-name', () => {
        expect(EventWrapper.find('.event-name')).toHaveLength(1);
    });

    test('render children of event-overview', () => {
        expect(EventWrapper.find('.event-overview').children()).toHaveLength(3);
    });

    test('render children of event-info ', () => {
        EventWrapper.setState({
            showDetails: true
        });
        expect(EventWrapper.find('.event-info')).toHaveLength(1);
    });
});
