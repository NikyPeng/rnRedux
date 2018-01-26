import React,{Component} from 'react';
import {
    View,
    Image,
} from 'react-native';
import TextComp from './../../../components/TextComp';
import loginStyles from './../../../../styles/mine/loginStyles';

export default class LoginModel extends Component {
    constructor(props) {
        super(props);
    };
    componentWillMount() {

    };
    componentDidMount() {

    };
    render() {
        return (
            <View style={[loginStyles.pageBg,loginStyles.flexRow]}>
                <View style={[loginStyles.loginBox]}>
                    <View>
                        <TextComp text=""  />
                    </View>
                </View>
            </View>
        )
    }
}