import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function postComment(comment) {
    try {
        await axios.post(API_URL, comment)
    } catch (error) {
        console.log(error)
    }
}