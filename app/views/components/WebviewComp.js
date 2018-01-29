import React,{Component} from 'react';
import {
    WebView,
} from 'react-native';
import  DeviceInfo from 'react-native-device-info';

export default class WebviewComp extends Component {
    constructor(props) {
        super(props);
    };
    componentWillMount() {

    };
    componentDidMount() {

    };
    render() {
        return (
            <WebView
                {...this.props}
                userAgent={DeviceInfo.getUserAgent() + this.props.userAgentStr}         //android 实现userAgent传递信息
            />
        )
    }
}