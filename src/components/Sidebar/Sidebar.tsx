import NavMenu from "../NavMenu/NavMenu";
import collapseIcon from "../../assets/icons/sidebar-collapse.svg";
import signOutIcon from "../../assets/icons/sign-out.svg";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>
            <span className={styles.logoLetter}>N</span>
          </div>
          <span className={styles.logoText}>Nexli</span>
        </div>
        <button
          type="button"
          className={styles.collapseButton}
          aria-label="Collapse sidebar"
        >
          <img src={collapseIcon} alt="" />
        </button>
      </div>
      <div className={styles.nav}>
        <NavMenu variant="sidebar" activeLabel="Data Engine" />
      </div>
      <div className={styles.footer}>
        <button type="button" className={styles.signOut}>
          <img src={signOutIcon} alt="" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
