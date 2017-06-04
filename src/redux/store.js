import isAuthen from './reducer/isAuthen';
import arrAllPlace from './reducer/arrAllPlace';
import user from './reducer/user'
const redux = require('redux');


const reducer = redux.combineReducers({
    isAuthen,
    arrAllPlace,
    user
})

const store = redux.createStore(reducer);

export default store;