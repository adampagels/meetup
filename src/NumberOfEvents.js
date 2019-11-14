import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 10
    }

    render() {
        return (
            <div className="number-of-events">
                <label>Number of Events: </label>
                <input
                    type="text"
                    class="event-number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}


export default NumberOfEvents;