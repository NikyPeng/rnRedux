import React,{Component} from 'react';
import {
    Text,
} from 'react-native';

export default class TextComp extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <Text allowFontScaling={false} {...this.props}>{this.props.text}</Text>
        )
    }
}