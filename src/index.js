import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NotFound } from './components/NotFound';
import NewNotice from './components/NewNotice';
import NoticeList from './components/NoticeList';
import { createStore } from 'redux';
import rootReducer from "./reducers";
import { Provider } from 'react-redux';
import Notice from './components/Notice';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Création du store via Redux
const store = createStore(
  rootReducer,
  // Ligne suivante indispensable pour voir apparaitre votre store dans l'extension Redux DevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/newNotice' component={NewNotice}/>
      <Route exact path='/notice/:id' component={Notice}/>
      <Route exact path='/noticeList' component={NoticeList}/>
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
