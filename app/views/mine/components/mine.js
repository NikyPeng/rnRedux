/**
 * Created by glzc on 2018/1/29.
 */
import {connect} from 'react-redux';
import Mine from './mineModel';

const mapStateToProps = (state) => {
    return {
        isLogin: state.mineReducers.mineLoginReducer.isLogin,
        userName: state.mineReducers.mineLoginReducer.userName,
    }
};

const mapDispatchToProps = () => {};


export default connect(mapStateToProps)(Mine);
