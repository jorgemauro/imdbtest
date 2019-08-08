import axios from 'axios';
import {config} from '../../api/config';

export const getHomeMovies = (search) => {
    return (dispatch) => {
        let movies = [];
        axios.get(`${config.urlData}?s=${search}&apikey=${config.key}`)
            .then((resp) => {
                let promises = [];
                resp.data.Search.forEach((movie) => {
                        promises.push(axios.get(`${config.urlData}?t=${movie.Title}&apikey=${config.key}`).then(
                            (resp2) => {
                                movies.push(resp2.data);
                            }
                        ))
                    }
                );
                axios.all(promises).then(()=>{
                    dispatch({type:'SEARCH',movies:movies})
                });
            }).catch((erro) => erro);
    }
};
export const getIndex = (index) => {
    return (dispatch) => {
        dispatch({type: 'SELECT', index: index});
    }
};