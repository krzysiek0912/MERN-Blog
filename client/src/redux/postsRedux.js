import axios from 'axios';
import { request } from 'http';
import API_URL from '../config';
import { startRequest, endRequest, resetRequest, errorRequest } from './requestReducer';

/* SELECTORS */
export const getPosts = ({ posts }) => posts.data;
export const getCurentPost = ({ posts }) => posts.curentPost[0];
export const getEditPost = ({ posts }) => posts.editPost[0];
export const getPostsCount = ({ posts }) => posts.data.length;

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_CURENT_POST = createActionName('LOAD_CURENT_POST');
export const LOAD_EDIT_POST = createActionName('LOAD_EDIT_POST');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadCurentPost = payload => ({ payload, type: LOAD_CURENT_POST });
export const loadEditPost = payload => ({ payload, type: LOAD_EDIT_POST });

/* THUNKS */
export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest('requestPost'));
    try {
      const res = await axios.get(`${API_URL}/posts`);
      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      dispatch(loadPosts(res.data));
      dispatch(endRequest('requestPost'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestPost'));
    }
  };
};

export const loadCurentPostRequest = id => {
  return async dispatch => {
    dispatch(startRequest('requestPost'));
    try {
      const res = await axios.get(`${API_URL}/posts/${id}`);

      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      dispatch(loadCurentPost(res.data));
      dispatch(endRequest('requestPost'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestPost'));
    }
  };
};
export const loadEditPostRequest = id => {
  return async dispatch => {
    dispatch(startRequest('requestEditPost'));
    try {
      const res = await axios.get(`${API_URL}/posts/${id}`);

      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      dispatch(loadEditPost(res.data));
      dispatch(endRequest('requestEditPost'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestEditPost'));
    }
  };
};

export const addPostRequest = post => {
  return async dispatch => {
    dispatch(startRequest('requestPost'));
    try {
      const res = await axios.post(`${API_URL}/posts`, post);
      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      dispatch(endRequest('requestPost'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestPost'));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  curentPost: [],
  editPost: [],
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...statePart, data: action.payload };
    case LOAD_CURENT_POST:
      return { ...statePart, curentPost: action.payload };
    case LOAD_EDIT_POST:
      return { ...statePart, editPost: action.payload };
    default:
      return statePart;
  }
}
