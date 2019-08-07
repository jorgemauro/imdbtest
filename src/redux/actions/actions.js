export const getHomeMovies=()=> {
    return (dispatch)=>{
        const movies = [{title:'movie1'},{title:'movie2'},{title:'movie3'},{title:'movie4'}];
        dispatch({type:'SEARCH',movies});
    }
};