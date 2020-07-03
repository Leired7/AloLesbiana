import React from 'react';

import Home from 'pages/Home/Home';

import 'react-bulma-components/dist/react-bulma-components.min.css';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Home className="home" />
      </Router>
    </React.Fragment>
  );
}

export default App;
