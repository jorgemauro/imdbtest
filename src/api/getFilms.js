
import axios from 'axios';
import {config} from './config'

export const searchByTitle =(title)=> axios.get(`${config.urlData}?t=${title}&apikey=${config.key}`)
    .then((resp)=>resp).catch((erro)=>erro);
export const getPoster = (id)=>axios.get(`${config.urlImg}?i=${id}&apikey=${config.key}`)
    .then((resp)=>resp).catch((erro)=>erro);