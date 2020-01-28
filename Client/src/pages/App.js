import React from 'react';
import '../static/css/App.css';
import LoginContainer from './LoginContainer';
import Main from './Main';
import RegisterContainer from './RegisterContainer';
import Support from './Support';
import Header from '../components/Header';
import { useRoutes } from 'hookrouter';
import { rootReducer } from '../store/reducers';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import UserPageContainer from './UserPageContainer';



const store = createStore(rootReducer);

const routes = {
  '/': () => <Main />,
  '/login': () => <LoginContainer />,
  '/register': () => <RegisterContainer />,
  '/support': () => <Support />,
  '/user/:id': ({id}) => <UserPageContainer id={id}/>
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
