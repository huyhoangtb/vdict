import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import mySaga from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);

// const composeEnhancers = composeWithDevTools({ realtime: true, hostname: '192.168.1.5', port: 19001 });

const Store = createStore(rootReducer, undefined,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any 10.0.1.1:8081
  )
//   compose(
//     applyMiddleware(sagaMiddleware),
// )
);
sagaMiddleware.run(mySaga);
export default Store;
