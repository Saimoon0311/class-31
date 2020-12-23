import { ReactReduxContext } from "react-redux";
import reducer from "./action/reducer";
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(thunk))

export default store;