import bellIcon from "../../assets/icons/bell.svg";
import styles from "./TopBar.module.scss";

function TopBar() {
  return (
    <header className={styles.topBar}>
      <p className={styles.title}>Data Engine</p>
      <div className={styles.user}>
        <button
          type="button"
          className={styles.bellButton}
          aria-label="Notifications"
        >
          <img src={bellIcon} alt="" />
        </button>
        <div className={styles.avatar}>
          <span className={styles.initials}>AN</span>
        </div>
        <div className={styles.userInfo}>
          <p className={styles.userName}>Admin Nexli</p>
          <p className={styles.userRole}>Administrator</p>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
