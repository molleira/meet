import React, { Component } from 'react';
import './App.css';
import logo from './logo192.png';
import "./nprogress.css";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { OfflineAlert } from './Alert';
import { getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    alertText: '',
  }

  updateEvents = (location, eventCount) => {
    if (!navigator.onLine) {
      this.setState({
        alertText: 'You are currently offline and viewing data from your last visit',
      });
    } else {
      this.setState({
        alertText: '',
      });
    }

    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = location === 'all' ? events.events : events.events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: filteredEvents,
          currentLocation: location,
          locations: events.locations,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = currentLocation === 'all' ? events.events : events.events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        if (this.mounted) {
          return this.setState({
            events: filteredEvents,
            numberOfEvents: eventCount,
            locations: events.locations,
          });
        }
      });
    }
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.events,
          locations: events.locations,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData() {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(',').shift();
      return { city, number };
    });
    return data;
  }

  render() {
    return (
      <div className="App">
        <br></br>
        <img src={logo} className='logointro' />
        <h2>Explore upcoming events from Career Foundry</h2>
        <br></br>
        <label id="city-label">Select your city: </label>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <OfflineAlert text={this.state.alertText} />
        <h2>Events in each city</h2>
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#4CC9F0" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;