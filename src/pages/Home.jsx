import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getHomeMovies,getIndex} from './../redux/actions/actions'
import {TextField, CardMedia} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {Search} from '@material-ui/icons';

const mapStateToProps = state => {
    return {
        movies: state.movies,
    }
};

const Home = (props) => {
    const [search, setSearch] = useState("");
    useEffect(() => {
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
            <Card style={{display: 'flex', width: '80%', top:10, position:'absolute', justifyContent:'center', padding:'10px'}}><TextField onEnter={() => props.getHomeMovies(search)} fullWidth value={search}
                                                                     onChange={event => setSearch(event.target.value)}/><Search className="cursormodify"
                onClick={
                    () => props.getHomeMovies(search)}/></Card>

            {props.movies.movies.length !== 0 &&
            <Card style={{marginTop:'5%',width: '80%', display: 'flex', flexWrap: 'wrap', minHeight: '30%', padding: 10, justifyContent:'center'}}>
                {props.movies.movies.map((movie, index) => <Card key={index} className="cursormodify" onClick={()=>{
                    props.getIndex(index);
                    props.history.push('/movieDetail');
                }} style={{margin: '5px',padding:"10px 5px", width: '25%', minHeight:'500px'}}>
                    <img style={{width: '100%', height: '80%'}} alt={movie.Title} src={movie.Poster}/>
                    <h6><b>Titulo:</b> {movie.Title}</h6>
                    <h6><b>ImdbRating:</b> {movie.imdbRating}</h6>
                </Card>)}
            </Card>}
        </div>)
};

export default connect(mapStateToProps, {getHomeMovies,getIndex})(Home);
