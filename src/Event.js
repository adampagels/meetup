import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false,
        event: {}
    }

    handleShowDetails = () => {
        this.setState({ showDetails: true });
    }
    render() {
        const showDetails = this.state.showDetails;
        return (
            <div className="event">
                <div className="event-overview">
                    <div className="event-name">{this.props.event.name}</div>
                    <div className="event-date">{this.props.event.local_date}</div>
                    <button class onClick={() => this.handleShowDetails()}>Show Details</button>
                </div>
                {showDetails &&
                    <div className="event-info">
                        <div className="event-details">{this.props.event.description}</div>
                    </div>
                }
            </div>
        );
    }
}

export default Event;