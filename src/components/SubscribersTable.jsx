// Libraries
import React from 'react';
import Reflux from 'reflux';

// Components
import UnsubscribeButton from './UnsubscribeButton.jsx';

// Actions
import SubscriberActions from '../actions/SubscriberActions.js';


class SubscribersTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            subscribers: props.subscribers
        };

        this.onUnsubscribeContact = this.onUnsubscribeContact.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            subscribers: nextProps.subscribers
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.subscribers.map((subscriber) => {
                        if (subscriber){
                        return (
                            <tr key={subscriber.id}>
                                <td className="column">{subscriber.firstName}</td>
                                <td className="column">{subscriber.lastName}</td>
                                <td className="column">{subscriber.emailAddress}</td>
                                <td className="column">
                                    <UnsubscribeButton
                                        subscriberId={subscriber.id}
                                        onClick={this.onUnsubscribeContact}
                                        disabled={this.state.saving} />
                                </td>
                            </tr>
                        )}
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

    onUnsubscribeContact(id) {
        SubscriberActions.RemoveSubscriber(id);
    }
}

SubscribersTable.propTypes = {
    subscribers: React.PropTypes.array.isRequired
}

export default SubscribersTable
