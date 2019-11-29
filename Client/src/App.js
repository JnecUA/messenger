import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Support from './pages/Support';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/support" component={Support}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
