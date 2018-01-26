/**
 * Created by glzc on 2018/1/25.
 */
import types from './../types';

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
const counterActions = {
    increment: increment,
    decrement: decrement
}
export default counterActions;