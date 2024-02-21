import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenTicketClicked(props.id)}>
                <h3>{props.names}</h3>
                <h3>{props.location}</h3>
                <p><em>{props.date}</em></p>
                <p><em>{props.description}</em></p>
                <hr />
            </div>
        </React.Fragment>
    );
}

Ticket.propTypes = {
    names: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
    whenTicketClicked: PropTypes.func
};

export default Event;