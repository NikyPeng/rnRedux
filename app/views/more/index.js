import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import WebviewComp from './../components/WebviewComp';
export default class More extends Component {
    constructor(props) {
        super(props);
    };
    componentWillMount() {

    };
    componentDidMount() {

    };
    render() {
        return (
            <View style={{flex: 1}}>
                <WebviewComp
                    source={{url:'https://www.baidu.com'}}
                />
            </View>
        )
    }
}