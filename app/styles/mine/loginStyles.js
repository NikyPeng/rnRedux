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
        paddingTop: Util.pixel*20,
        paddingBottom: Util.pixel*20,
    },
    inputBox: {
        height: Util.pixel*60,
        paddingLeft: Util.pixel*10,
        paddingRight: Util.pixel*10,
    },
    label: {
        width: Util.pixel*80,
        height: Util.pixel*40,
        textAlign: 'right',
        fontSize: Util.commonFontSize(18),
        lineHeight: Util.lineHeight(40),
    },
    input: {
        padding: 0,
        width: Util.pixel*260,
        height: Util.pixel*40,
        borderWidth: Util.pixel*1,
        borderColor: '#e8e8e8',
        borderRadius: Util.pixel*5,
        textAlign: 'center',
        color: '#4a4a4a',
        fontSize: Util.commonFontSize(15),
    },
    loginBtn: {
        width: Util.pixel*340,
        height: Util.pixel*38,
        backgroundColor: '#9b9b9b',
        borderRadius: Util.pixel*5,
    },
}));

export default loginStyles