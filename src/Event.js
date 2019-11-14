import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false,
        event: {
            "created": 1573065410000,
            "duration": 19800000,
            "id": "266264106",
            "name": "Google Chrome Dev Summit 2019  - Streaming Sessions",
            "rsvp_limit": 100,
            "date_in_series_pattern": false,
            "status": "upcoming",
            "time": 1574523000000,
            "local_date": "2019-11-23",
            "local_time": "10:30",
            "updated": 1573065655000,
            "utc_offset": -18000000,
            "waitlist_count": 0,
            "yes_rsvp_count": 58,
            "venue": {
                "id": 26111532,
                "name": "51 Dockside Dr",
                "lat": 43.64396286010742,
                "lon": -79.365478515625,
                "repinned": true,
                "address_1": "51 Dockside Dr",
                "city": "Toronto",
                "country": "ca",
                "localized_country_name": "Canada",
                "zip": "M5A 1B6",
                "state": "ON"
            },
            "group": {
                "created": 1542929988000,
                "name": "GDG Cloud Toronto - A Google Developer Group",
                "id": 30577560,
                "join_mode": "open",
                "lat": 43.65999984741211,
                "lon": -79.38999938964844,
                "urlname": "GDG-Cloud-Toronto",
                "who": "Members",
                "localized_location": "Toronto, ON",
                "state": "ON",
                "country": "ca",
                "region": "nl_NL",
                "timezone": "Canada/Eastern"
            },
            "link": "https://www.meetup.com/nl-NL/GDG-Cloud-Toronto/events/266264106/",
            "description": "<p>Join for the Google Chrome Dev Summit to learn about the latest techniques for building for the modern Web, get an early insight into what Google is working on, and to share your thoughts on how we can move the platform forward, together.<br/>We will see how Chrome team and members of the ecosystem will deep-dive into the latest updates to the platform and tools to improve developer productivity, as they build pinnacle web experiences for their users.<br/>We will specifically discuss at end of the session the relevance and benefits of Google Chrome to Entrepreneurs as part of Global Entrepreneurship Week at GBC.</p> <p>Agenda:<br/>10:30 AM - 11:00 AM Check-in and Registration<br/>11:00 AM - 11:30 AM GDG Cloud Toronto and WTM Introduction<br/>11:30 AM - 01:00 PM Chrome Dev Summit Sessions streaming + Q&amp;A<br/>01:00 PM - 02:00 PM Lunch and Networking<br/>02:00 PM - 03:00 PM Chrome Dev Summit Sessions streaming + Q&amp;A<br/>03:00 PM - 04:00 PM Discussion - Global Entrepreneurship week</p> ",
            "how_to_find_us": "Room WF607, George Brown College Waterfront Campus",
            "visibility": "public",
            "pro_is_email_shared": false,
            "member_pay_fee": false
        }
    }

    handleShowDetails = () => {
        this.setState({ showDetails: true });
    }
    render() {
        const showDetails = this.state.showDetails;
        return (
            <div className="event">
                <div className="event-overview">
                    <div className="event-name">{this.state.event.name}</div>
                    <div className="event-date">{this.state.event.local_date}</div>
                    <button class onClick={() => this.handleShowDetails()}>Show Details</button>
                </div>
                {showDetails &&
                    <div className="event-info">
                        <div className="event-details">{this.state.event.description}</div>
                    </div>
                }
            </div>
        );
    }
}

export default Event;