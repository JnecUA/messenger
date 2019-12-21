import React from 'react';
import './App.css';
import Header from '../components/Header';
import Login from './Login';
import Main from './Main';
import RegisterContainer from './RegisterContainer';
import Support from './Support';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { rootReducer } from '../store/reducers';
import { createStore } from "redux";
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={RegisterContainer}/>
            <Route path="/support" component={Support}/>
          </Switch>
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;
