import React, { Component } from "react";

import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value });
        this.props.updateEvents(null, null, value);

        if (value < 1) {
            this.setState({
                infoText: 'Number of Events must be more than 1'
            });
        } else {
            this.setState({
                infoText: '',
            });
        }
    }

    render() {
        return (
            <div className="number-of-events">
                <label>Number of Events: </label>
                <input
                    type="text"
                    id="event-number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleChange}
                />
                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    }
}


export default NumberOfEvents;