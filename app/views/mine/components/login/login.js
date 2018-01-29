/**
 * Created by glzc on 2018/1/26.
 */
import { connect } from 'react-redux';
import LoginModel from './loginModel';
import mineLoginAction from './../../../../actions/mineActions/mineLoginAction';

const mapStateToProps = (state) => {
    return {
        ...state.mineReducers.mineLoginReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLoginInfos: (infos) => dispatch(mineLoginAction.getLoginInfos(infos)),
        login: (infos) => dispatch(mineLoginAction.login(infos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModel);