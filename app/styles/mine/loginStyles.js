/**
 * Created by glzc on 2018/1/26.
 */
import {StyleSheet} from 'react-native';
import Util from './../../common/utils';
import baseStyles from './../baseStyles'
const loginStyles = StyleSheet.create(Object.assign({}, baseStyles, {
    pageBg: {
        flex: 1,
        backgroundColor: '#3a3a3a',
    },
    loginBox: {
        borderWidth: Util.pixel*1,
        borderColor: '#e8e8e8',
        borderRadius: Util.pixel*5,
        backgroundColor: '#ffffff',
    },
    listHeader: {
        paddingTop: Util.pixel*20
    }
}));

export default loginStyles