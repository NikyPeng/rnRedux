/**
 * Created by glzc on 2018/1/29.
 */
const Storage = require('./../../common/storage');
const StorageKeys = require('./../../common/storageKeys');

const initState = {
    userName: '',
    password: '',
    isLogin: false,
};
const mineLoginReducer = (state, action) => {
    if(typeof state === 'undefined'){
        return initState
    };
    //console.log('****login****');
    switch (action.type){
        case 'LOGININFOS':
            state = Object.assign({},state, action.userInfos);
            return state
            break;
        case 'LOGIN':
            Storage.setItem(StorageKeys.USERINFOS, action.infos);
            state = Object.assign({},state, {password: '', isLogin: true});
            return state
            break;
        default :
            return state
            break;
    }
}

export default mineLoginReducer;