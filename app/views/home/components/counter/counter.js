/**
 * Created by glzc on 2018/1/25.
 */
import { connect } from 'react-redux';
import CounterModel from './counterModel';
import counterActions from './../../../../actions/homeActions/homeCounterAction';
const mapStateToProps = (state) => {
    //console.log('=====state', state)
    return {
        value: state.homeReducers.homeCounterReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(counterActions.increment()),
        onDecrement: () => dispatch(counterActions.decrement())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterModel);