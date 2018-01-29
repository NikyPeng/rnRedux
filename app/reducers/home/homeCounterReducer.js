/**
 * Created by glzc on 2018/1/25.
 */

const initState = 0;
const homeCounterReducer = (state, action) => {
    if(typeof state === 'undefined'){
        return initState
    }
    //console.log('****counter****');
    switch (action.type){
        case 'INCREMENT':
            return state + 1
            break;
        case 'DECREMENT':
            return state - 1
            break;
        default :
            return state;
            break;
    }
};

export default homeCounterReducer;