import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import TextComp from './../../components/TextComp';
import Counter from './counter/counter';
import homeStyles from './../../../styles/home/homeStyles';

export default class HomeModel extends Component {
    constructor(props) {
        super(props);
    };
    componentWillMount() {
        
    };
    componentDidMount() {
        
    };
    render() {
        return (
            <View style={[{flex: 1}, homeStyles.flexRow]}>
                <Counter />
                {
                    this.props.isLogin ? <TextComp text="isLogin" style={homeStyles.title} /> : null
                }
            </View>
        )
    }
}