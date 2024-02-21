import React from "react";
import PropTypes from "prop-types";

function EventDetail(props) {
    const { event, onClickingDelete } = props;

    return (
        <React.Fragment>
            <h1>event Detail</h1>
            <h3>{event.events}</h3>
            <h3>{event.location}</h3>
            <p><em>{event.date}</em></p>
            <p><em>{event.description}</em></p>
            <button onClick={props.onClickingEdit}>Update event</button>
            <button onClick={() => onClickingDelete(event.id)}>Close event</button>
            <hr />
        </React.Fragment>
    );
}

EventDetail.propTypes = {
    event: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default EventDetail;