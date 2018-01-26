/**
 * Created by glzc on 2018/1/25.
 */
import {StyleSheet} from 'react-native';
import Util from './../../common/utils';
import baseStyles from './../baseStyles';
const counterCompStyles = StyleSheet.create(Object.assign({}, baseStyles, {
    btn: {
        width: Util.pixel*80,
        height: Util.pixel*30,
        backgroundColor: '#00f',
        borderRadius: Util.pixel*5,
    },
    btnText: {
        fontSize: Util.commonFontSize(15),
        color: '#fff'
    }
}));

export default counterCompStyles;