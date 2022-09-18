import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function postComment(comment) {
  axios
    .post(API_URL, comment)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
