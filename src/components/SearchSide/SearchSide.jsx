import styles from "./SearchSide.module.css";

const SearchSide = () => {
  return (
    <div className={styles.searchSideCont}>
      <h2>Sort BY</h2>
      <select name="" id="">
        <option value="">...</option>
        <option value="latest">Latest Post</option>
        <option value="upvote">Most Up-Voted</option>
      </select>
    </div>
  );
};

export default SearchSide;
