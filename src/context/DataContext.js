import { forumData } from "../data/data";
import { createContext, useContext, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  forumData: forumData,
  sort: null,
};

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "UPVOTE":
      const updatedPost = state?.forumData?.posts.map((post) =>
        post?.postId === action?.payload?.postId
          ? {
              ...post,
              upvotes: post.upvotes + 1,
            }
          : post
      );

      return {
        ...state,
        forumData: { ...state.forumData, posts: updatedPost },
      };

    case "DOWNVOTE":
      const updatedDownPost = state?.forumData?.posts.map((post) =>
        post?.postId === action?.payload?.postId
          ? {
              ...post,
              downvotes: post.downvotes + 1,
            }
          : post
      );

      return {
        ...state,
        forumData: { ...state.forumData, posts: updatedDownPost },
      };

    case "bookmark":
      const updateMark = state?.forumData?.posts.map((post) =>
        post?.postId === action?.payload?.postId
          ? {
              ...post,
              isBookmarked: !post.isBookmarked,
            }
          : post
      );

      return {
        ...state,
        forumData: { ...state.forumData, posts: updateMark },
      };

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  console.log(data.forumData.posts);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
