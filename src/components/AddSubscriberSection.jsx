// Libraries
import React from 'react';
import _ from 'underscore';

// Stores
import SubscriberActions from '../actions/SubscriberActions.js';

class AddSubscriberSection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            saving: false,
            subscriberToAdd: {
                firstName: '',
                lastName: '',
                emailAddress: ''
            }
        };

        // bind to this
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            saving: nextProps.saving
        });
    }

    render() {
        return (
            <div>
                <h3>Add a Subscriber</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input type="text"
                            name="firstName"
                            value={this.state.subscriberToAdd.firstName}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text"
                            name="lastName"
                            value={this.state.subscriberToAdd.lastName}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Email Address:
                        <input type="text"
                            name="emailAddress"
                            value={this.state.subscriberToAdd.emailAddress}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit"
                        value={this.state.saving ? 'Saving...' : 'Add Subscriber'}
                        disabled={this.state.saving} />
                </form>
            </div>
        );
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState((prevState, props) => {
            return {
                subscriberToAdd: _.extend(
                    prevState.subscriberToAdd,
                    {[`${name}`]: value}
                )
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        SubscriberActions.AddSubscriber(this.state.subscriberToAdd);
        this.setState({
            subscriberToAdd: {
                firstName: '',
                lastName: '',
                emailAddress: ''
            }
        });
    }
}

export default AddSubscriberSection
