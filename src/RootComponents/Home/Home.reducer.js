const _initialState = {
    data: [],
    dataLoaded: true
};
function home(state, action) {
    state = state || _initialState;
    let newState;
    if (action.type === 'loadData') {
      console.log(action.data)
        newState = Object.assign({}, state);
        newState.data = [...state.data,action.data]
        newState.dataLoaded = true;
        console.log(newState)
        return newState;
    }
    else if (action.type === "loadingData") {
           newState = Object.assign({}, state);
           newState.dataLoaded = !state.dataLoaded;
           return newState;
         } else {
           return state;
         }
}

export default home;
