import React from "react";
import Event from "./Event";
import PropTypes from "prop-types";

function EventList(props) {

    return (
        <React.Fragment>
            <hr />
            {props.eventList.map((event) =>
                <Event
                    whenEventClicked={props.onEventSelection}
                    names={event.names}
                    location={event.location}
                    description={event.description}
                    id={event.id}
                    key={event.id} />
            )}
        </React.Fragment>
    );
}

EventList.propTypes = {
    eventList: PropTypes.array,
    onEventSelection: PropTypes.func
};

export default EventList;