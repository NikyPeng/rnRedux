/**
 * Created by glzc on 2018/1/29.
 */
import {StyleSheet} from 'react-native';
import Util from './../../common/utils';
import baseStyles from './../baseStyles';

const homeStyles = StyleSheet.create(Object.assign({}, baseStyles, {
    title: {
        fontSize: Util.pixel*25,
        color: '#4a4a4a',
        marginTop: Util.pixel*20,
    }
}));

export default homeStyles;
