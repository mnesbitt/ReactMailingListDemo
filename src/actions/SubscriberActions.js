// Libraries
import Reflux from 'reflux';
import uuid from 'node-uuid';


const SubscriberActions = Reflux.createActions({
    "GetSubscribers": {sync: true, children: ["started", "completed", "failed"]},
    "AddSubscriber": {sync: true, children: ["started", "completed", "failed"]},
    "RemoveSubscriber": {sync: true, children: ["completed", "failed"]}
});


SubscriberActions.GetSubscribers.listen(() => {
    SubscriberActions.GetSubscribers.started();

    // this is where you would make an API call to get a list of subscribers
    // instead we will simulate with setTimeout and return a hard-coded list
    setTimeout(() => {
        SubscriberActions.GetSubscribers.completed(defaultSubscribers);
    }, 500);
});


SubscriberActions.AddSubscriber.listen((subscriber) => {

    subscriber.id = uuid.v4();
    SubscriberActions.AddSubscriber.started(subscriber);

    // this is where we should make an API call to add a subscriber
    // instead we will simulate with setTimeout and just call completed()
    setTimeout(() => {
        SubscriberActions.AddSubscriber.completed();
    }, 500);

});

SubscriberActions.RemoveSubscriber.listen((id) => {
    // this is where we should make an API call to add a subscriber
    // instead we will just call completed()
    SubscriberActions.RemoveSubscriber.completed(id);
});


// a hard-coded list of subscribers to return for GetSubscribers actions
const defaultSubscribers = [
    {
        "id": "1",
        "firstName": "John",
        "lastName": "Doe",
        "emailAddress": "jd@gmail.com"
    },
    {
        "id": "2",
        "firstName": "Matthew",
        "lastName": "Nesbitt",
        "emailAddress": "mnesbitt@commercehub.com"
    }
];

export default SubscriberActions;
