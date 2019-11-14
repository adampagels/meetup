import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 10
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value });
    }

    render() {
        return (
            <div className="number-of-events">
                <label>Number of Events: </label>
                <input
                    type="text"
                    class="event-number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


export default NumberOfEvents;