import React from 'react';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, and, when, then }) => {

        given('the list of events has been loaded', () => {
        });

        let AppWrapper;

        and('app loaded', () => {
            AppWrapper = mount(<App />);
        })

        when('the user did not click show details yet', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
        });

        then('the event elements are collapsed', () => {
            expect(AppWrapper.find('exanded')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, and, when, then }) => {
        let AppWrapper;
        given('app loaded', () => {
            AppWrapper = mount(<App />);
        });

        and('the list of events has been loaded', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
        });

        when('the user clicks show Details', () => {
            AppWrapper.find('.Event .details-btn').at(0).simulate('click')
        });

        then('the event element should expand and show more information', () => {
            expect(AppWrapper.find('.Event .extra')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide details', ({ given, and, when, then }) => {
        let AppWrapper;
        given('app loaded', () => {
            AppWrapper = mount(<App />);
        });

        and('event element is expanded and shows details', () => {
            AppWrapper.update();
            AppWrapper.find('.Event .details-btn').at(0).simulate('click');
            expect(AppWrapper.find('.Event .extra')).toHaveLength(1);
        });

        when('the user clicks the hide details button', () => {
            AppWrapper.find('.Event .details-btn').at(0).simulate('click');
        });

        then('the event element details should collapse', () => {
            expect(AppWrapper.find('.Event .extra')).toHaveLength(0);
        });
    });
});