import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer';
import createSageMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSageMiddleware();
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// );

const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySaga);

export default store;