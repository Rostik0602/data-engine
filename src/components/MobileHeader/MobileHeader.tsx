import menuIcon from '../../assets/icons/menu.svg'
import bellIcon from '../../assets/icons/bell.svg'
import styles from './MobileHeader.module.scss'

interface MobileHeaderProps {
  onMenuClick: () => void
}

function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button type="button" className={styles.iconButton} aria-label="Menu" onClick={onMenuClick}>
          <img src={menuIcon} alt="" />
        </button>
        <div className={styles.logo}>
          <div className={styles.logoMark}>
            <span className={styles.logoLetter}>N</span>
          </div>
          <span className={styles.logoText}>Nexli</span>
        </div>
      </div>
      <div className={styles.right}>
        <button type="button" className={styles.iconButton} aria-label="Notifications">
          <img src={bellIcon} alt="" />
        </button>
        <div className={styles.avatar}>
          <span className={styles.initials}>AN</span>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader