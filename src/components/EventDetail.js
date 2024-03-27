import React from "react";
import PropTypes from "prop-types";

function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
}
function EventDetail(props) {
    const { event, onClickingDelete, onAddingAttendance, onSubtractingAttendance } = props;

    return (
        <React.Fragment>
            <h1>Event Details</h1>
            <img src={event.imageurl ? props.event.imageurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt="" />
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