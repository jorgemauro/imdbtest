const initialState = {
    movies: [],
    index:0
};
export default  (state=initialState, action) => {
    switch (action.type) {
        case 'SEARCH':{
            return {
                ...state,
                movies:action.movies,
            }
        }
        case 'SELECT':{
            return {
                ...state,
                index:action.index
            }
        }
        default:
            return state;
    }
}