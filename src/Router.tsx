import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageOne from './pages/PageOne';
// import PageTwo from './pages/PageTwo';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PageOne />} />
      {/* <Route path="/about" element={<PageTwo />} /> */}
    </Routes>
  </Router>
);

export default AppRouter;
