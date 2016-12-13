// Libraries
import React from 'react';
import Reflux from 'reflux';

// Components
import SubscribersTable from './SubscribersTable.jsx';
import AddSubscriberSection from './AddSubscriberSection.jsx';

// Actions
import SubscriberActions from '../actions/SubscriberActions.js';

// Stores
import SubscriberStore from '../stores/SubscriberStore.js';


class SubscribersContainer extends Reflux.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            saving: false,
            subscribers: []
        };

        this.store = SubscriberStore;
        // this.storeKeys = [ 'loading', 'saving', 'subscribers' ];
    }

    componentDidMount() {
        SubscriberActions.GetSubscribers();
    }

    render() {
        let table;

        if (this.state.loading) {
            table = <h4>Loading...</h4>
        } else if (this.state.subscribers.length == 0) {
            table = (<h4>Mailing List is empty!</h4>);
        } else {
            table = (<SubscribersTable subscribers={this.state.subscribers} />);
        }

        return (
            <div>
                <AddSubscriberSection saving={this.state.saving} />
                <br />
                <br />
                <h3>Current Mailing List:</h3>
                {table}
            </div>
        );
    }
};

export default SubscribersContainer
