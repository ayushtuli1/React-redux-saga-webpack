const _initialState = {
    applications: {
        data: [],
        dataLoaded: false
    }
};
function app(state, action) {
    state = state || _initialState;
    let newState;
    if (action.type === 'ACTION.DASHBOARD.STORE_DASHBOARD_TIPS') {
        newState = Object.assign({}, state);
        newState.tips.dataLoaded = true;
        newState.tips.data = action.data;
        return newState;
    } else {
        return state;
    }
}

export default app;
