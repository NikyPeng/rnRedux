import React,{Component} from 'react';
import {
    View,
    Image,
} from 'react-native';
import TextComp from './../../components/TextComp';
import Button from './../../components/Button';
import Counter from './counter/counter';
import homeStyles from './../../../styles/home/homeStyles';
import MarqueeLabel from 'react-native-lahk-marquee-label';

export default class HomeModel extends Component {
    constructor(props) {
        super(props);
    };
    componentWillMount() {
        
    };
    componentDidMount() {
        
    };
    toPage(routeName, params){
        console.log('routeName', routeName);
        this.props.navigation.navigate(routeName, params);
    };
    render() {
        return (
            <View style={[{flex: 1}, homeStyles.flexColumn,{justifyContent: 'space-around'}]}>
                <MarqueeLabel duration={8000} text={'受支付通道限制，民生银行暂停快速充值服务，具体恢复时间另行通知。受支付通道限制，民生银行暂停快速充值服务，具体恢复时间另行通知。'} textStyle={{fontSize: 13, color: 'white'}} />
                <Counter />
                {
                    this.props.isLogin ? <TextComp text="isLogin" style={homeStyles.title} /> : null
                }
                <Button _onPress={this.toPage.bind(this, 'products', {})}>
                    <TextComp text="Go to products Page333"  style={homeStyles.title} />
                </Button>
                <Button _onPress={this.toPage.bind(this, 'homePageOne', {})}>
                    <TextComp text="Go to Page One"  style={homeStyles.title} />
                </Button>
            </View>
        )
    }
}