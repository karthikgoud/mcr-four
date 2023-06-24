import { NavLink, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SearchSide from "../../components/SearchSide/SearchSide";
import SideNav from "../../components/SideNav/SideNav";
import SinglePostCard from "../../components/SinglePostCard/SinglePostCard";
import styles from "./SinglePost.module.css";
import { useData } from "../../context/DataContext";

const SinglePost = () => {
  const { postId } = useParams();

  const {
    data: {
      forumData: { posts },
    },
  } = useData();

  const postFound = posts.find((post) => post.postId === postId);

  console.log(postFound);

  return (
    <div className={styles.homeCont}>
      <Header />
      <div className={styles.mainDiv}>
        <SideNav />
        <div>
          <NavLink to="/">Back</NavLink>
          <SinglePostCard onePost={postFound} />
        </div>

        <SearchSide />
      </div>
    </div>
  );
};

export default SinglePost;
