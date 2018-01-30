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
    };
    componentWillMount() {

    };
    componentDidMount() {
        console.log('navigation', this.props.navigation)
    };
    toPage(routeName, params){
        this.props.navigation.navigate(routeName, params);
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
        return (
            <View>
                <Button _onPress={this.toPage.bind(this, 'products')}>
                    <TextComp text="Go to products Page"  style={homeStyles.title} />
                </Button>
            </View >
        )
    }
}