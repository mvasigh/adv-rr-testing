import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, AUTHENTICATE_USER } from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const request = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}

export function authenticateUser(isLoggedIn) {
  return {
    type: AUTHENTICATE_USER,
    payload: isLoggedIn
  };
}
