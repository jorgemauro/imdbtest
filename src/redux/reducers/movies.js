const initialState = {
    movies: [],
};
export default  (state=initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'SEARCH':{
            return {
                ...state,
                movies:action.movies,
            }
        }
        default:
            return state;
    }
}