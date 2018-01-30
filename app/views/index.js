/**
 * Created by glzc on 2017/12/21.
 */
import React,{Component} from 'react';
import {
    View,
    Linking,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import AppRouters from './routers';
import reducers from './../reducers';
import { isIOS } from './../common/utils';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class RnReduxApp extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        Linking.addEventListener('url', this._handleOpenURL);
    };
    _handleOpenURL(event){
        console.log('event', event);
    }
    render(){
        const prefix = isIOS ? 'rnredux://' : 'rnredux://rnredux/';            //实现链接打开对应的APP页面
        console.log('prefix', prefix);
        return (
            <Provider store={store}>
                <AppRouters uriPrefix={prefix} />
            </Provider>
        )

    }
}