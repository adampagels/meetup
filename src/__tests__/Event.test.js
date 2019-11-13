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
});