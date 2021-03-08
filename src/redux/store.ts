import { combineReducers, createStore, applyMiddleware } from 'redux';
import weatherReducer from './weatherReducer';
import thunkMiddleware from 'redux-thunk';


let rootReducer = combineReducers({
  weatherReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const storage = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default storage