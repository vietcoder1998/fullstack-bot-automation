import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotList from './components/BotList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BotList />} />
        {/* Additional routes can be added here */}
      </Routes>
    </Router>
  );
};

export default App;