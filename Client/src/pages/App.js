import React from 'react';
import './App.css';
import Header from '../components/Header';
import LoginContainer from './LoginContainer';
import Main from './Main';
import RegisterContainer from './RegisterContainer';
import Support from './Support';
import { useRoutes } from 'hookrouter';
import { rootReducer } from '../store/reducers';
import { createStore } from "redux";
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const routes = {
  '/': () => <Main />,
  '/login': () => <LoginContainer />,
  '/register': () => <RegisterContainer />,
  '/support': () => <Support />
}

function App() {
  const routeResults = useRoutes(routes)
  return (
    <Provider store={store}>
        <div className="App">
          <Header />
          {routeResults}
        </div>
    </Provider>
  );
}

export default App;
