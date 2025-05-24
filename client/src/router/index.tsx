import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotList from '../components/BotList';

const AppRouter: React.FC = () => {
    return 'test'
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BotList />} />
                {/* Add more routes here as needed */}
            </Routes>
        </Router>
    );
};

export default AppRouter;