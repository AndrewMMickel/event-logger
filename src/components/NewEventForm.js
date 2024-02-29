import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
function NewEventForm(props) {
    function handleNewEventFormSubmission(event) {
        console.log(event.target);
        event.preventDefault();
        props.onNewEventCreation({
            names: event.target.names.value,
            location: event.target.location.value,
            date: event.target.date.value,
            description: event.target.description.value,
            id: v4()
        });
    }

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewEventFormSubmission}
                buttonText="Add event!" />
        </React.Fragment>
    );
}

NewEventForm.propTypes = {
    onNewEventCreation: PropTypes.func
};
export default NewEventForm;