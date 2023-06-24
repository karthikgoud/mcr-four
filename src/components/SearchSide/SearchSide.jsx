import { useData } from "../../context/DataContext";
import styles from "./SearchSide.module.css";

const SearchSide = () => {
  const { dispatch } = useData();

  function handleFilter(value) {
    console.log(value);
    dispatch({ type: value });
  }

  return (
    <div className={styles.searchSideCont}>
      <h2>Sort BY</h2>
      <select name="" id="" onChange={(e) => handleFilter(e.target.value)}>
        <option value="">...</option>
        <option value="latest">Latest Post</option>
        <option value="upvote">Most Up-Voted</option>
      </select>
    </div>
  );
};

export default SearchSide;
