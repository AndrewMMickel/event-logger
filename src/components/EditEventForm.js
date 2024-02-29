import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEventForm(props) {
    const { event } = props;

    function handleEditEventFormSubmission(events) {
        event.preventDefault();
        props.onEditEvent({ names: event.target.names.value, location: event.target.location.value, date: event.target.date.value, description: event.target.description.value, id: event.id });
    }

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleEditEventFormSubmission}
                buttonText="Update Event" />
        </React.Fragment>
    );
}

EditEventForm.propTypes = {
    events: PropTypes.object,
    onEditEvent: PropTypes.func
};

export default EditEventForm;