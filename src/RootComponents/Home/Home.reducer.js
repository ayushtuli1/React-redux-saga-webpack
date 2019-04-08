const _initialState = {
    data: [1, 2, 3, 4],
    dataLoaded: false
};
function home(state, action) {
    state = state || _initialState;
    let newState;
    if (action.type === 'loadData') {
        newState = Object.assign({}, state);
        newState.data = [1, 2, 3, 4, 1, 2, 3, 4];
        newState.dataLoaded = true;
        return newState;
    } else {
        return state;
    }
}

export default home;
