import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = async () => {
  // Bad approach
  const response = await jsonPlaceHolder.get("/posts");

  return {
    type: "FETCH_POSTS",
  };
};
