import React from 'react';
import NewEventForm from './NewEventForm';
import EventList from './EventList';
import EventDetail from './EventDetail';
import EditEventForm from './EditEventForm';

class EventControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainEventList: [],
            selectedEvent: null,
            editing: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        if (this.state.selectedEvent != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedEvent: null,
                editing: false
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }

    handleEditClick = () => {
        console.log("handleEditClick reached!");
        this.setState({ editing: true });
    }

    handleEditingEventInList = (eventToEdit) => {
        const editedMainEventList = this.state.mainEventList
            .filter(event => event.id !== this.state.selectedEvent.id)
            .concat(eventToEdit);
        this.setState({
            mainEventList: editedMainEventList,
            editing: false,
            selectedEvent: null
        });
    }

    handleAddingNewEventToList = (newEvent) => {
        const newMainEventList = this.state.mainEventList.concat(newEvent);
        this.setState({
            mainEventList: newMainEventList,
            formVisibleOnPage: false
        });
    }

    handleChangingSelectedEvent = (id) => {
        const selectedEvent = this.state.mainEventList.filter(event => event.id === id)[0];
        this.setState({ selectedEvent: selectedEvent });
    }

    handleAddingAttendance = (event) => {
        const editedEvent = { ...event, quantity: event.quantity + 1 };
        const updatedMainEventList = this.state.mainEventList
            .filter(event => event.id !== this.state.selectedEvent.id)
            .concat(editedEvent);
        this.setState({
            mainEventList: updatedMainEventList, selectedEvent: editedEvent
        });
    };

    handleSubtractingAttendance = (event) => {
        if (event.quantity === 0) {
            return;
        } else {
            const editedEvent = { ...event, quantity: event.quantity - 1 };
            const updatedMainEventList = this.state.mainEventList
                .filter(event => event.id !== this.state.selectedEvent.id)
                .concat(editedEvent);
            this.setState({
                mainEventList: updatedMainEventList, selectedEvent: editedEvent
            });
        }
    }

    handleDeletingEvent = (id) => {
        const newMainEventList = this.state.mainEventList.filter(event => event.id !== id);
        this.setState({
            mainEventList: newMainEventList,
            selectedEvent: null
        });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.editing) {
            currentlyVisibleState = <EditEventForm eventToEdit={this.state.selectedEvent} onEditEvent={this.handleEditingEventInList} />
            buttonText = "Return to Event List";
        } else if (this.state.selectedEvent != null) {
            currentlyVisibleState =
                <EventDetail
                    event={this.state.selectedEvent}
                    onClickingDelete={this.handleDeletingEvent}
                    onClickingEdit={this.handleEditClick}
                    onAddingAttendance={this.handleAddingAttendance}
                    onSubtractingAttendance={this.handleSubtractingAttendance} />
            buttonText = "Return to Event List";
        }
        else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewEventForm onNewEventCreation={this.handleAddingNewEventToList} />;
            buttonText = "Return to Event List";
        } else {
            currentlyVisibleState = <EventList eventList={this.state.mainEventList} onEventSelection={this.handleChangingSelectedEvent} />;
            buttonText = "Add Event";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }

}

export default EventControl;