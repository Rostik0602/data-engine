import NavMenu from '../NavMenu/NavMenu'
import styles from './MobileMenu.module.scss'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}
      <aside className={isOpen ? `${styles.menu} ${styles.open}` : styles.menu}>
        <NavMenu variant="drawer" activeLabel="Dashboard" />
      </aside>
    </>
  )
}

export default MobileMenu