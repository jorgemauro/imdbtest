import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getHomeMovies, getIndex} from './../redux/actions/actions'
import {TextField, Button} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {Search} from '@material-ui/icons';

const mapStateToProps = state => {
    return {
        movies: state.movies,
    }
};
const ordem = (rule, item1, item2) => {
    if (rule)
        return item1;
    else
        return item2;
};

const Home = (props) => {
    const [search, setSearch] = useState("");

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        if (movies.length === 0)
            setMovies(props.movies.movies);
    }, [props.movies]);
    if (props.movies.length === 0) {
        return <div>Loading...</div>
    } else
        return (<div style={{
            width: '100vw',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Card style={{
                display: 'flex',
                width: '80%',
                top: 10,
                position: 'absolute',
                justifyContent: 'center',
                padding: '10px'
            }}><TextField onEnter={() => props.getHomeMovies(search)} fullWidth value={search}
                          onChange={event => setSearch(event.target.value)}/><Search className="cursormodify"
                                                                                     onClick={
                                                                                         () => props.getHomeMovies(search)}/></Card>

            {props.movies.movies.length !== 0 &&
            <div>
                <div style={{
                    margin: 5, display: 'flex',
                    marginTop: '5%',
                    width: '80%', justifyContent: 'center'
                }}>
                    <Button variant='contained' onClick={() => {
                        setMovies(movies.sort((item1, item2) => {
                            if (parseInt(item1.imdbRating) > parseInt(item2.imdbRating))
                                return item1;
                            else
                                return item2;
                        }));
                    }}>Ordenar por nota</Button>
                        <Button variant='contained' onClick={() => {
                            setMovies(movies.sort((item1, item2) => ordem(((item1.Title > item2.Title) ? 1 : ((item1.Title > item2.Title)), item1, item2))))
                        }}>Ordenar por nome</Button>
                        </div>
                        <Card style={{
                            width: '80%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            minHeight: '30%',
                            padding: 10,
                            justifyContent: 'center'
                        }}>
                        {movies.map((movie, index) => <Card key={index} className="cursormodify"
                                                            onClick={() => {
                                                                props.getIndex(index);
                                                                props.history.push('/movieDetail');
                                                            }} style={{
                            margin: '5px',
                            padding: "10px 5px",
                            width: '25%',
                            minHeight: '500px'
                        }}>
                            <img style={{width: '100%', height: '80%'}} alt={movie.Title} src={movie.Poster}/>
                            <h6><b>Titulo:</b> {movie.Title}</h6>
                            <h6><b>ImdbRating:</b> {movie.imdbRating}</h6>
                        </Card>)}
                        </Card>
                        </div>}
                        </div>)
                        };

                        export default connect(mapStateToProps, {getHomeMovies, getIndex})(Home);
