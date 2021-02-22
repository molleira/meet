// src/NumberOfEvents.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorAlert } from './Alert'

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({
      numberOfEvents: value,
    });
    if (value < 1 || value > 32) {
      this.setState({
        infoText: 'Enter a number between 1 and 32',
      });
    } else {
      this.setState({
        infoText: '',
      })
    }
  };

  render() {
    return (
      <div className="number-of-events">
        <label className="number-of-events-label">Number of Events: </label>
        <input type="number" className="event-number" value={this.state.numberOfEvents} onChange={this.handleInputChanged}></input>
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

NumberOfEvents.propTypes = {
  updateEvents: PropTypes.func,
};
NumberOfEvents.defaultProps = {
  updateEvents: () => { },
};

export default NumberOfEvents;