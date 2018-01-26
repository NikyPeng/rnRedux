/**
 * Created by glzc on 2018/1/25.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import Counter from './components/counter/counter';
import baseStyles from './../../styles/baseStyles';

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
            <View style={[baseStyles.container, baseStyles.flexRow]}>
                <Counter />
            </View>
        )
    }
}