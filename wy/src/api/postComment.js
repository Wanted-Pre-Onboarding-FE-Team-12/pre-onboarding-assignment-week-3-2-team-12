import axios from 'axios';
import { API_URL } from '../constants/API_URL';

export async function postComment(comment){
    axios.post(API_URL, comment)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}