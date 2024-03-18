import React from "react";
import PropTypes from "prop-types";

function EventDetail(props) {
    const { event, onClickingDelete, onAddingAttendance, onSubtractingAttendance } = props;

    return (
        <React.Fragment>
            <h1>Event Details</h1>
            <h3>Event Name: {event.names}</h3>
            <h3>Location: {event.location}</h3>
            <p>Event starts on: <em>{event.date}</em></p>
            <p>Extra notes about the event: <em>{event.description}</em></p>
            <h3>Are you attending? <button onClick={() => onAddingAttendance(event)}>Yes</button>
                <button>Maybe</button>
                <button onClick={() => onSubtractingAttendance(event)}>No</button></h3>
            <p>Attendance numbers: {event.quantity}</p>
            <button onClick={props.onClickingEdit}>Update event</button>
            <button onClick={() => onClickingDelete(event.id)}>Close event</button>
            <hr />
        </React.Fragment>
    );
}

EventDetail.propTypes = {
    event: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onAddingAttendance: PropTypes.func,
    onSubtractingAttendance: PropTypes.func
};

export default EventDetail;