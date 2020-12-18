import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "/" component = {Home} exact />
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
