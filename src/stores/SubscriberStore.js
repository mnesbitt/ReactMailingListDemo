// Libraries
import Reflux from 'reflux';
import _ from 'underscore';

// Actions
import SubscriberActions from '../actions/SubscriberActions.js';


class SubscriberStore extends Reflux.Store {

    constructor() {
        super();
        this.state = {
            loading: false,
            saving: false,
            subscribers: []
        };

        this.listenables = SubscriberActions;
    }

    // =============================================================
    // GetSubscribers
    // ==============
    onGetSubscribersStarted() {
        this.setState({loading: true});
    }
    onGetSubscribersCompleted(subscribers) {
        this.setState({
            loading: false,
            subscribers: subscribers
        });
    }
    onGetSubscribersFailed(err) {
        console.error(`failed to load subscribers: ${err}`);
        this.setState({loading: false});
    }



    // =============================================================
    // AddSubscriber
    // =============
    onAddSubscriberStarted(newSubscriber) {
        this.setState((prevState, props) => {
            prevState.subscribers.push(newSubscriber)
            return {
                saving: true,
                subscribers: prevState.subscribers
            };
        });
    }
    onAddSubscriberCompleted() {
        this.setState((prevState, props) => {
            return {
                saving: false,
            };
        });
    }
    onAddSubscriberFailed(err, _subscriber) {
        console.error(`failed to save subscriber: ${err}`);
        // remove the subscriber from the store since it wasn't actually added
        this.setState((prevState, props) => {
            return {
                subscribers: prevState.subscribers.filter((subscriber) => {
                    return subscriber.id != _subscriber.id;
                })
            };
        });
    }



    // =============================================================
    // RemoveSubscriber
    // ================
    onRemoveSubscriberCompleted(id) {
        this.setState((prevState, props) => {
            this._prevSubscribers = prevState.subscribers;  // save old subscribers to rollback to on failure
            return {
                subscribers: prevState.subscribers.filter((subscriber) => {
                    return subscriber.id != id;
                })
            };
        });
    }
    onRemoveSubscriberFailed(err) {
        console.error(`failed to remove subscriber: ${err}`);
        this.setState({
            subscribers: _prevSubscribers    // restore subscribers from before delete
        });
    }
}

export default SubscriberStore
