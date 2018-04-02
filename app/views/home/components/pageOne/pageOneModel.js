import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from './../../../components/Button';
import TextComp from './../../../components/TextComp';
import homeStyles from './../../../../styles/home/homeStyles';

export default class PageOneModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            name: 'pc',
        }
    };
    componentWillMount() {

    };
    componentDidMount() {
        console.log('navigation', this.props.navigation)
    };
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
    };     //父组件发生render时，子组件就会调用（不管props是否更新，也不管父子组件是否有数据交换）
    shouldComponentUpdate(nextProps, nextState) {           //组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要更新组件，默认返回true
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    };
    componentWillUpdate(nextProps, nextState){              //shouldComponentUpdate 返回true或者forceUpdate之后，componentWillUpdate会被调用
        console.log('componentWillUpdate', nextProps, nextState);
    };
    componentDidUpdate(){                                   //组件除了首次render之后调用componentDidMount，其他render之后都是调用componentDidUpdate
        console.log('componentDidUpdate');
    };
    componentWillUnmount() {
        console.log('componentWillUnmount');
    };
    toPage(routeName, params){
        this.setState({
            isShow: !this.state.isShow,
            name: this.state.name + 'a',
        });
        //this.props.navigation.navigate(routeName, params);
    };
    _back(key){
        this.props.navigation.goBack(key);
    };
    _reset(routeName, childRouteName){
        let navAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: routeName, action: NavigationActions.navigate({routeName: childRouteName})})
            ]
        })
        this.props.navigation.dispatch(navAction);
    };
    render() {
        console.log('=======000000=======');
        return (
            <View>
                <Button _onPress={this.toPage.bind(this, 'products')}>
                    <TextComp text="Go to products Page"  style={homeStyles.title} />
                    {
                        this.state.isShow ?
                            <TextComp text={this.state.name} style={homeStyles.title}  />
                        :
                            null
                    }
                </Button>
            </View >
        )
    }
}