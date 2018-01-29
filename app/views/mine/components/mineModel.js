import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import mineStyles from './../../../styles/mine/mineStyles';
const EventEmitter = require('RCTDeviceEventEmitter');

export default class MineModel extends Component {
    constructor(props) {
        super(props);
    };
    componentWillMount() {

    };
    componentDidMount() {
        EventEmitter.addListener('checkIsLogin', (o) => {
            this.isLogin(o);
        });
    };
    isLogin(o){
        console.log('12321', o)
        !this.props.isLogin ? this.props.navigation.navigate('mineLogin') : o.jumpToIndex(o.scene.index);
    };
    render() {
        return (
            <View style={[{flex: 1},mineStyles.flexRow]}>
                <Text>Welcome to here,{this.props.userName}</Text>
            </View>
        )
    }
}