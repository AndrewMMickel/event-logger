import React from "react";
import PropTypes from "prop-types";

function Event(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenEventClicked(props.id)}>
                <h3>{props.names}</h3>
                <h3>{props.location}</h3>
                <p><em>{props.date}</em></p>
                <p><em>{props.description}</em></p>
                <p>{parseInt(props.quantity)}</p>
                <hr />
            </div>
        </React.Fragment>
    );
}

Event.propTypes = {
    names: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
    whenEventClicked: PropTypes.func
};

export default Event;