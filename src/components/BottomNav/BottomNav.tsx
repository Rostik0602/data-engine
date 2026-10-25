import homeIcon from '../../assets/icons/bottom-home.svg'
import ordersIcon from '../../assets/icons/bottom-orders.svg'
import matchIcon from '../../assets/icons/bottom-match.svg'
import disputesIcon from '../../assets/icons/bottom-disputes.svg'
import settingsIcon from '../../assets/icons/bottom-settings.svg'
import styles from './BottomNav.module.scss'

interface BottomNavItem {
  label: string
  icon: string
}

const items: BottomNavItem[] = [
  { label: 'Home', icon: homeIcon },
  { label: 'Orders', icon: ordersIcon },
  { label: 'Match', icon: matchIcon },
  { label: 'Disputes', icon: disputesIcon },
  { label: 'Settings', icon: settingsIcon },
]

function BottomNav() {
  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <a key={item.label} href="#" className={styles.item}>
          <img src={item.icon} alt="" />
          <span className={styles.label}>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}

export default BottomNav