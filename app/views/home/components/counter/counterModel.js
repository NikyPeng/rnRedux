import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import Button from './../../../components/Button';
import TextComp from './../../../components/TextComp';
import counterCompStyles from './../../../../styles/home/counterCompStyles';

export default class CounterModel extends Component {
    constructor(props) {
        super(props);
    };
    componentWillMount() {

    };
    componentDidMount() {
        
    };
    render() {
        return (
            <View style={counterCompStyles.flexRow}>
                <Button style={[counterCompStyles.flexRow, counterCompStyles.btn]} _onPress={this.props.onIncrement}>
                    <TextComp text="加一" style={counterCompStyles.btnText} />
                </Button>
                <TextComp text={this.props.value} style={counterCompStyles.btnText} />
                <Button style={[counterCompStyles.flexRow, counterCompStyles.btn]} _onPress={this.props.onDecrement}>
                    <TextComp text="减一" style={counterCompStyles.btnText} />
                </Button>
            </View>
        )
    }
}