import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleWare from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleWare();



const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
