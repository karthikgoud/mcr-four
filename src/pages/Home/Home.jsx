import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SearchSide from "../../components/SearchSide/SearchSide";
import SideNav from "../../components/SideNav/SideNav";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeCont}>
      <Header />
      <div className={styles.mainDiv}>
        <SideNav />
        <Main />

        <SearchSide />
      </div>
    </div>
  );
};

export default Home;
