/**
 * Created by glzc on 2018/1/29.
 */
import {connect} from 'react-redux';
import HomeModel from './homeModel';

const mapStateToProps = (state) => {
    return {
        isLogin: state.mineReducers.mineLoginReducer.isLogin
    }
}

export default connect(mapStateToProps)(HomeModel);
