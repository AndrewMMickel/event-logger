import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <label htmlFor='imageurl'>Image url</label><br />
                <input
                    type='text'
                    name='imageurl'
                    placeholder='URL to image'
                    defaultValue={props ? props.imageurl : ""} /><br />
                <input
                    type='text'
                    name='names'
                    placeholder='Event Name' />
                <input
                    type='date'
                    name='date'
                    placeholder='Event Date' />
                <input
                    type='text'
                    name='location'
                    placeholder='Location' />
                <textarea
                    name='description'
                    placeholder='Describe the event.' />
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;