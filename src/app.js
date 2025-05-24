// This file serves as the entry point of the application. It initializes the application, sets up routing, and integrates components.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TicketPurchase from './components/TicketPurchase';
import ServiceList from './components/ServiceList';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ServiceList} />
                <Route path="/purchase" component={TicketPurchase} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));