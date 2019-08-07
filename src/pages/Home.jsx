import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getHomeMovies} from './../redux/actions/actions'

const mapStateToProps = state => {
    return {
        movies: state.movies,
    }
};

const Home = (props) => {
    console.log(props);
    useEffect(() => {
        props.getHomeMovies();
    }, [props.movies]);
    if (props.movies.length === 0) {
        return <div>Loading...</div>
    } else
        return (<div>

            {props.movies.movies.map((movie) => <div>{movie.title}</div>)}
        </div>)
};

export default connect(mapStateToProps, {getHomeMovies})(Home);
