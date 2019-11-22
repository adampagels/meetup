import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert';
import moment from 'moment';

class App extends Component {
  componentDidMount() {
    getEvents().then(response => this.setState({ events: response }));
  }

  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    warningText: ''
  }

  updateEvents = (lat, lon, page) => {
    if (!navigator.onLine) {
      this.setState({ warningText: 'You are not connected to the internet! The list of events is loaded from the last session.' });
    } else {
      this.setState({ warningText: '' })
    }

    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(response =>
        this.setState({ events: response, lat, lon }));
    }
    else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response =>
        this.setState({ events: response, page }));
    }
    else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response =>
        this.setState({ events: response }));
    }
  }

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = []; // Create empty array for the next 7 days
    const currentDate = moment(); // Today
    // Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
      // Use the countEventsOnADate function to count #events on this date
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  }

  render() {

    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <WarningAlert text={this.state.warningText} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.events.length}
          lat={this.state.lat}
          lon={this.state.lon}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;