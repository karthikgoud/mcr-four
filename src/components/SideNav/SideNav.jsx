import styles from "./SideNav.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { PiRocket } from "react-icons/pi";
import { BsBookmark } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const SideNav = () => {
  return (
    <div className={styles.sideNavCont}>
      <div>
        <div className={styles.navIconCont}>
          <AiOutlineHome size={34} /> <span>Home</span>
        </div>
        <div className={styles.navIconCont}>
          <PiRocket size={34} /> <span>Home</span>
        </div>
        <div className={styles.navIconCont}>
          <BsBookmark size={34} /> <span>Home</span>
        </div>
        <div className={styles.navIconCont}>
          <BiUserCircle size={34} /> <span>Home</span>
        </div>
      </div>
      <div className={styles.userProfile}>
        <div className={styles.avatar}></div>
        <div>
          <h3>tanay pratap</h3>
          <h3>@tanaypratap</h3>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
