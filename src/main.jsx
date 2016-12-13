// Libraries
import ReactDom from 'react-dom';
import React from 'react';

// Components
import MailingListApp from './mailingListApp.jsx';


export function main() {
    ReactDom.render(
        <MailingListApp />,
        document.getElementById('appContainer')
    );
}
