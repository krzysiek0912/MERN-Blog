import axios from 'axios';
import API_URL from '../config';
import { startRequest, endRequest, errorRequest } from './requestReducer';

/* SELECTORS */
export const getPosts = ({ posts }) => posts.data;
export const getPages = ({ posts }) => Math.ceil(posts.amount / posts.postsPerPage);
export const getCurentPages = ({ posts }) => posts.presentPage;
export const getCurentPost = ({ posts }) => posts.curentPost[0];
export const getEditPost = ({ posts }) => posts.editPost[0];
export const getPostsCount = ({ posts }) => posts.data.length;

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_POSTS_PAGE = createActionName('LOAD_POSTS_PAGE');
export const LOAD_CURENT_POST = createActionName('LOAD_CURENT_POST');
export const LOAD_EDIT_POST = createActionName('LOAD_EDIT_POST');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadPostsByPage = payload => ({ payload, type: LOAD_POSTS_PAGE });
export const loadCurentPost = payload => ({ payload, type: LOAD_CURENT_POST });
export const loadEditPost = payload => ({ payload, type: LOAD_EDIT_POST });

/* THUNKS */
export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest('requestPost'));
    try {
      const res = await axios.get(`${API_URL}/posts`);
      await new Promise(resolve => setTimeout(resolve, 500));
      dispatch(loadPosts(res.data));
      dispatch(endRequest('requestPost'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestPost'));
    }
  };
};

export const loadPostsByPageRequest = page => {
  return async dispatch => {
    dispatch(startRequest('requestPost'));
    try {
      const postsPerPage = 10;

      const startAt = (page - 1) * postsPerPage;
      const limit = postsPerPage;

      const res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);
      await new Promise(resolve => setTimeout(resolve, 2000));

      const payload = {
        posts: res.data.posts,
        amount: res.data.amount,
        postsPerPage,
        presentPage: page,
      };

      dispatch(loadPostsByPage(payload));
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

      await new Promise(resolve => setTimeout(resolve, 500));
      dispatch(loadCurentPost(res.data));
      dispatch(endRequest('requestPost'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestPost'));
    }
  };
};
export const loadEditPostRequest = id => {
  return async dispatch => {
    dispatch(startRequest('requestPost'));
    try {
      const res = await axios.get(`${API_URL}/posts/${id}`);

      await new Promise(resolve => setTimeout(resolve, 500));
      dispatch(loadEditPost(res.data));
      dispatch(endRequest('requestPost'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestPost'));
    }
  };
};

export const addPostRequest = post => {
  return async dispatch => {
    dispatch(startRequest('requestForm'));
    try {
      await axios.post(`${API_URL}/posts`, post);
      await new Promise(resolve => setTimeout(resolve, 500));
      dispatch(endRequest('requestForm'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestForm'));
    }
  };
};

export const editPostRequest = post => {
  return async dispatch => {
    dispatch(startRequest('requestForm'));
    try {
      await axios.post(`${API_URL}/update/${post._id}`, post);
      await new Promise(resolve => setTimeout(resolve, 500));
      dispatch(endRequest('requestForm'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestForm'));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  curentPost: [],
  editPost: [],
  amount: 0,
  postsPerPage: 10,
  presentPage: 1,
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...statePart, data: action.payload };
    case LOAD_POSTS_PAGE:
      return {
        ...statePart,
        postsPerPage: action.payload.postsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.posts],
      };
    case LOAD_CURENT_POST:
      return { ...statePart, curentPost: action.payload };
    case LOAD_EDIT_POST:
      return { ...statePart, editPost: action.payload };
    default:
      return statePart;
  }
}
