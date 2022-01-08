import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

//---------------- FETCH POSTS-USER SOLUTION --------------- //

export const fetchPostsAndUser = () => async (dispatch) => {
  
};

//---------------- fetchPosts --------------- //
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

// Refactored Version
// export const fetchPosts = () => async (dispatch) => {
//   const response = await jsonPlaceHolder.get("/posts");

//   dispatch({
//     type: "FETCH_POSTS",
//     payload: response,
//   });
// };

//---------------- MEMOIZE FETCH USER SOLUTION --------------- //
// export const fetchUser = (id) => async (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// Extracting request to use lodash memoize to solve multi-request
// by making helper function and memoize it since it will not work on action/action creator function
// Downside to this ** WE can ONly fetch user data ONETIME only **

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

//---------------- ORIGINAL FETCH USER --------------- //

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
