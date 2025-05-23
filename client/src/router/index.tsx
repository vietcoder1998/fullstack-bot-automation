import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotList from '../components/BotList';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={BotList} />
                {/* Add more routes here as needed */}
            </Switch>
        </Router>
    );
};

export default AppRouter;