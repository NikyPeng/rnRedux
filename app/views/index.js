/**
 * Created by glzc on 2017/12/21.
 */
import React,{Component} from 'react';
import {
    View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import AppRouters from './routers';
import reducers from './../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class RnReduxApp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider store={store}>
                <AppRouters />
            </Provider>
        )

    }
}