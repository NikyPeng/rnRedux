/**
 * Created by glzc on 2018/1/29.
 */
import types from './../types';

const getLoginInfos = (infos) => {          //同步action
    return {
        type: types.mine.loginInfos,
        userInfos: Object.assign({}, infos)
    }
};

const login = (infos) => {                  //同步action
    return {
        type: types.mine.login,
        userInfos: Object.assign({}, infos)
    }
}
const loginAsync = (infos) => {             //redux-thunk作用是当dispatch传入当action返回一个function时，会给返回的function传入dispatch，和Vuex中的action一样
    return (dispatch) => {
        console.log('===infos===', infos);
        setTimeout(() => {
            dispatch(login({userName: 'pc', password: 'asd123'}))
        }, 2000);
    }
}
const mineLoginAction = {
    getLoginInfos: getLoginInfos,
    login: login
}

export default mineLoginAction;