import React,{Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.click = true;
    };
    componentWillMount() {
        
    };
    componentDidMount() {

    };
    _onPress(){
        console.log('=====', this.click)
        if(this.click){
            this.props._onPress && this.props._onPress()
            this.click = false;
            setTimeout(() => {
                this.click = true
            }, 100)
        }
    };
    render() {
        return (
            <TouchableOpacity activeOpacity= {0.8} {...this.props} onPress={this._onPress.bind(this)}>{this.props.children}</TouchableOpacity>
        )
    }
}