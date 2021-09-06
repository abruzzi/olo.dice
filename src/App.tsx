import React from 'react';
import './App.css';
import {RouteComponentProps, Router} from '@reach/router'

import { Home } from './components'

const HomePage = (props: RouteComponentProps) => <Home />

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path={'/'} default />
      </Router>
    </div>
  );
}

export default App;
