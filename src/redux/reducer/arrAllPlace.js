import getAllPlace from '../../api/place/getAllPlace';

const arrAllPlace = (state =[], action) => {
    if (action.type === 'ADD_PLACE') {
        return [action.item,...state];
    }
    if (action.type === 'INIT_PLACE') {
        return action.item;
    }
    return state;
};

export default arrAllPlace;
