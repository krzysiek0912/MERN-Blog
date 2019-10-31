import axios from 'axios';
import API_URL from '../config';
/* SELECTORS */
export const getPosts = ({ posts }) => posts.data;
export const getCurentPost = ({ posts }) => posts.curentPost[0];
export const getEditPost = ({ posts }) => posts.editPost[0];
export const getPostsCount = ({ posts }) => posts.data.length;
export const getRequest = ({ posts }) => posts.request;

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_CURENT_POST = createActionName('LOAD_CURENT_POST');
export const LOAD_EDIT_POST = createActionName('LOAD_EDIT_POST');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadCurentPost = payload => ({ payload, type: LOAD_CURENT_POST });
export const loadEditPost = payload => ({ payload, type: LOAD_EDIT_POST });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

/* THUNKS */
export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${API_URL}/posts`);
      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      dispatch(loadPosts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadCurentPostRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${API_URL}/posts/${id}`);

      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      dispatch(loadCurentPost(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
export const loadEditPostRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${API_URL}/posts/${id}`);

      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      dispatch(loadEditPost(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const addPostRequest = post => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.post(`${API_URL}/posts`, post);
      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const resetRequestObj = () => {
  return dispatch => {
    dispatch(resetRequest());
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  curentPost: [],
  editPost: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
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
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default:
      return statePart;
  }
}
