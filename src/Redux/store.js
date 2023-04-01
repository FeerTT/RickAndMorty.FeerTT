import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'; // middleware para manejar acciones asíncronas
import rootReducer from './reducers'; // importa el root reducer

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);
export default store;
