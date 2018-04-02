/**
 * Created by glzc on 2017/12/21.
 */

import { StackNavigator } from 'react-navigation';
import { getStateForAction } from './../common/utils';
import tabRouters from './tabRouters';
import homeRouters from './home/homeRouters';
import mineRouters from './mine/mineRouters';

const AppRouters = StackNavigator(Object.assign({},{
    tab: {screen: tabRouters}
}, homeRouters, mineRouters),{
    mode: 'card',
    transitionConfig: () => {
        //console.log('=========', arguments)
    },
    onTransitionStart: (props, preProps) => {
        //console.log('1111111', props, preProps)
    }
});

getStateForAction(AppRouters);

export default AppRouters