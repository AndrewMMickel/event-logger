import React from "react";
import PropTypes from "prop-types";

function Event(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenEventClicked(props.id)} className="event-comp">
                <img src={props.imageurl ? props.imageurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt={props.name} />
                <h3>{props.names}</h3>
                <h3>{props.location}</h3>
                <p><em>{props.date}</em></p>
                <p><em>{props.description}</em></p>
                <p>{props.quantity}</p>
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
    quantity: PropTypes.number,
    whenEventClicked: PropTypes.func
};

export default Event;