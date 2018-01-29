import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import MineComp from './components/mine';

export default class Mine extends Component {
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
                <MineComp navigation={this.props.navigation} />
            </View>
        )
    }
}