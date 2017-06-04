
const user = (state ={}, action) => {
    if (action.type === 'USER') {
        return action.item;
    }
    return state;
};

export default user;
