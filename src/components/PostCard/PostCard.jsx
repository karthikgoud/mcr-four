import styles from "./PostCard.module.css";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { useData } from "../../context/DataContext";
import { NavLink } from "react-router-dom";

const PostCard = ({ singlePost }) => {
  const { dispatch } = useData();

  const {
    upvotes,
    downvotes,
    username,
    name,
    post: postHead,
    postDescription,
    tags,
    createdAt,
    isBookmarked,
    postId,
  } = singlePost;

  const voteCount = upvotes - downvotes;

  return (
    <div className={styles.cardCont}>
      <div className={styles.countCont}>
        <BiSolidUpArrow
          size={30}
          onClick={() => dispatch({ type: "UPVOTE", payload: singlePost })}
        />
        <div>{voteCount}</div>
        <BiSolidDownArrow
          onClick={() => dispatch({ type: "DOWNVOTE", payload: singlePost })}
          size={30}
        />
      </div>
      <div className={styles.cardDetailsCont}>
        <div className={styles.userCont}>
          <div className={styles.avatar}></div>
          <div className={styles.postBy}>
            Posted by <span>@{username} </span>
            <BsDot /> 1m
          </div>
        </div>
        <h1 className={styles.cardTitle}>{postHead}</h1>
        <div className={styles.pillsCont}>
          {tags.map((tag) => (
            <span className={styles.pills}>{tag}</span>
          ))}
        </div>
        <p>{postDescription}</p>
        <hr />
        <div className={styles.iconsCont}>
          <NavLink to={`/singlepost/${postId}`}>
            <BiComment size={18} />
          </NavLink>

          <BsShare size={18} />
          <BsBookmark size={18} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
