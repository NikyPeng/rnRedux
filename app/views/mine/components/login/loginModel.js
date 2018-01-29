import React,{Component} from 'react';
import {
    View,
    Image,
    TextInput,
} from 'react-native';
import TextComp from './../../../components/TextComp';
import Button from './../../../components/Button';
import loginStyles from './../../../../styles/mine/loginStyles';

export default class LoginModel extends Component {
    static navigationOptions = ({navigation}) => ({
        header: null
    });
    constructor(props) {
        super(props);
        this.infos = {};
    };
    componentWillMount() {

    };
    componentDidMount() {

    };
    _getLoginInfos(v, type){
        if(type === 'userName'){
            v && v.trim() !== '' ?
                this.infos[type] = v
            :
                console.log('用户用不能为空！')
        }else if(type === 'password'){
            v && v.trim() !== '' ?
                this.infos[type] = v
            :
                console.log('用户密码不能为空！')
        }
        this.props.getLoginInfos(this.infos);
    };
    _login(){
        let msg = '',
            reg = new RegExp(/^(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))+$/);
        if(!this.infos.userName || this.infos.userName === ''){
            msg = '请输入用户名！';
        }else if(!this.infos.password || this.infos.password === ''){
            msg = '请输入登录密码！';
        }else if(this.infos.password.length < 6 || this.infos.password.length > 16 || !reg.test(this.infos.password)){
            msg = '请输入6～16同时含数字和字母的密码！';
        }else{
            this.props.login(this.infos);
            setTimeout(() => {
                this.props.navigation.goBack();
            })
            return;
        }
        console.log('msg', msg);
    };
    render() {
        return (
            <View style={[loginStyles.pageBg,loginStyles.flexRow]}>
                <View style={[loginStyles.loginBox]}>
                    <View style={[loginStyles.flexRow,loginStyles.inputBox]}>
                        <TextComp text="用户名：" style={loginStyles.label} />
                        <TextInput
                            value={this.props.userName}
                            onChangeText={(v) => {this._getLoginInfos(v, 'userName')}}
                            underlineColorAndroid="transparent"
                            style={loginStyles.input}
                        />
                    </View>
                    <View style={[loginStyles.flexRow,loginStyles.inputBox]}>
                        <TextComp text="密码：" style={loginStyles.label} />
                        <TextInput
                            value={this.props.password}
                            onChangeText={(v) => {this._getLoginInfos(v, 'password')}}
                            underlineColorAndroid="transparent"
                            style={loginStyles.input}
                        />
                    </View>
                    <View style={[loginStyles.flexRow,loginStyles.inputBox]}>
                        <Button _onPress={this._login.bind(this)} style={[loginStyles.flexRow,loginStyles.loginBtn]}>
                            <TextComp text="登录" style={[loginStyles.label,{textAlign: 'center',color: '#ffffff'}]} />
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}