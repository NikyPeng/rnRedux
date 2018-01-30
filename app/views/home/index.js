/**
 * Created by glzc on 2018/1/25.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import HomeComp from './components/home';

export default class Home extends Component {
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
                <HomeComp navigation={this.props.navigation} />
            </View>
        )
    }
}