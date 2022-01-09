import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

// --------------- FETCH POSTS-USER SOLUTION --------------- //

// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());
//   const userIds = _.uniq(_.map(getState().posts, "userId"));
//   // console.log(getState().posts);
//   // console.log(userIds);

//   //note that async/await dont work with foreach loop
//   userIds.forEach((id) => dispatch(fetchUser(id)));
// };

// REFACTORED with lodash chain
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

// --------------- fetchPosts --------------- //
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

//---------------- ORIGINAL FETCH USER --------------- //

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

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
