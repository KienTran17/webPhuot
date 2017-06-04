const isAuthen = (state = false, action) => {
    if (action.type === 'LOGIN') {
        return !state;
    }
    return state;
};

export default isAuthen;
