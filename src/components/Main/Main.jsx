import { useData } from "../../context/DataContext";
import PostCard from "../PostCard/PostCard";
import styles from "./Main.module.css";

const Main = () => {
  const {
    data: { forumData },
  } = useData();

  return (
    <div className={styles.mainCont}>
      <h1>Latest Posts</h1>
      <div>
        {forumData.posts.map((post) => (
          <PostCard singlePost={post} />
        ))}
      </div>
    </div>
  );
};

export default Main;
