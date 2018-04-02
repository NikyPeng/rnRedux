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
    componentWillMount() {              //组件挂载之前调用一次，从创建到销毁只执行一次

    };
    componentDidMount() {               //组件挂载之后调用一次，从创建到销毁只执行一次
        
    };
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
    };     //父组件发生render时，子组件就会调用（不管props是否更新，也不管父子组件是否有数据交换）
    shouldComponentUpdate(nextProps, nextState) {           //组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要更新组件，默认返回true
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextProps.value%2 === 0
    };
    componentWillUpdate(nextProps, nextState){              //shouldComponentUpdate 返回true或者forceUpdate之后，componentWillUpdate会被调用
        console.log('componentWillUpdate', nextProps, nextState);
    };
    componentDidUpdate(){                                   //组件除了首次render之后调用componentDidMount，其他render之后都是调用componentDidUpdate
        console.log('componentDidUpdate');
    };
    componentWillUnmount() {
        console.log('componentWillUnmount');
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