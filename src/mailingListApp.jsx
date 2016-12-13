// Libraries
import React from 'react';

// Components
import MailingListContainer from './components/MailingListContainer.jsx';

class MailingListApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to MailingList App</h1>
                <MailingListContainer />
            </div>
        );
    }
}

export default MailingListApp
