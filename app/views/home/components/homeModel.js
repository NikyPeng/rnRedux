import React,{Component} from 'react';
import {
    View,
    Image,
} from 'react-native';
import TextComp from './../../components/TextComp';
import Button from './../../components/Button';
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
    toPage(routeName, params){
        this.props.navigation.navigate(routeName, params);
    };
    render() {
        return (
            <View style={[{flex: 1}, homeStyles.flexColumn,{justifyContent: 'space-around'}]}>
                <Counter />
                {
                    this.props.isLogin ? <TextComp text="isLogin" style={homeStyles.title} /> : null
                }
                <Button _onPress={this.toPage.bind(this, 'products', {})}>
                    <TextComp text="Go to products Page"  style={homeStyles.title} />
                </Button>
                <Button _onPress={this.toPage.bind(this, 'homePageOne', {})}>
                    <TextComp text="Go to Page One"  style={homeStyles.title} />
                </Button>
            </View>
        )
    }
}