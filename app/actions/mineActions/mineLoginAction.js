/**
 * Created by glzc on 2018/1/29.
 */
import types from './../types';

const getLoginInfos = (infos) => {
    return {
        type: types.mine.loginInfos,
        userInfos: Object.assign({}, infos)
    }
};

const login = (infos) => {
    return {
        type: types.mine.login,
        userInfos: Object.assign({}, infos)
    }
}

const mineLoginAction = {
    getLoginInfos: getLoginInfos,
    login: login
}

export default mineLoginAction;