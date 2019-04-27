import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import {counter} from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//create the redux store
const store = createStore(counter, devToolsEnhancer());

ReactDOM.render(
    //Provider is to make the 'store' available to the 'App'
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

//Below is for using Webpack Hot Module Reloader
if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      ReactDOM.render(
        <Provider store={store}><NextApp /></Provider>,
        document.getElementById('root')
      );
    });
  
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
