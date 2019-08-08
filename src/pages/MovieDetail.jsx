import React, {useState, useEffect} from 'react';
import Card from "@material-ui/core/Card";
import {TextField, Button} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import List from '@material-ui/core/List';
import {getHomeMovies, getIndex} from "../redux/actions/actions";
import {connect} from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";

const mapStateToProps = state => {
    return {
        movies: state.movies,
        index: state.index,
    }
};
const forObj=(obj)=>{
    let arrCarc =[];
    for (let propiety in obj){
        if(propiety!=='Poster'&&propiety!=='Ratings')
        arrCarc.push(<ListItemText key={propiety} primary={propiety} secondary={obj[propiety]}/>);
        else if(propiety==='Ratings')
            obj[propiety].map((item)=>{
                arrCarc.push( <ListItemText key={item} primary={item['Source']} secondary={item['Value']}/>);
            })
    }
    return arrCarc;
};
const MovieDetail = (props) => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        setMovie(props.movies.movies[props.movies.index]);
    }, [props.movies]);
    if (!props.movies.movies[props.movies.index]) {

        return <div style={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}><Card style={{width: '80%', display: "flex", justifyContent: 'center'}}>
            <Button onClick={() => props.history.push('/')}>Voltar</Button>
        </Card>
        </div>
    } else
        return (<div style={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow:'column'
        }}>
            <Card style={{width: '80%', display: "flex", padding: '5px 10px', marginTop: '20px'}}>
                <img style={{width: '30%', maxHeight:'500px'}} alt={movie.Title}
                     src={movie.Poster}/>
                <div style={{width: '70%', backgroundColor: '#a4a4a4', display: 'flex', flexFlow: 'column', padding:'10%'}}>
                    <h3>Dados Tecnicos</h3>
                    <List>{
                        forObj(movie)
                    }
                    </List>
                </div>
            </Card>
            <div style={{width: '80%', display: "flex", justifyContent: 'flex-end', marginTop:'10px'}}>
                <Button variant="contained" onClick={() => props.history.push('/')}>Voltar a pesquisa</Button>
            </div>
        </div>)
};

export default connect(mapStateToProps, {getHomeMovies})(MovieDetail);
