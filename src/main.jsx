import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import Footer1 from './partials/footer1';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {/* <Header/> */}
      <App/>
      {/* <Footer1/> */}
    </Router>
  </React.StrictMode>
);
