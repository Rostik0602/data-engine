import { Fragment } from 'react'
import dashboardIcon from '../../assets/icons/nav-dashboard.svg'
import databaseIcon from '../../assets/icons/nav-database.svg'
import matchmakingIcon from '../../assets/icons/nav-matchmaking.svg'
import instantBookIcon from '../../assets/icons/nav-instant-book.svg'
import smartPricingIcon from '../../assets/icons/nav-smart-pricing.svg'
import dataEngineIcon from '../../assets/icons/nav-data-engine.svg'
import serviceCatalogIcon from '../../assets/icons/nav-service-catalog.svg'
import ratingSystemIcon from '../../assets/icons/nav-rating-system.svg'
import rulesIcon from '../../assets/icons/nav-rules.svg'
import unitEconomicsIcon from '../../assets/icons/nav-unit-economics.svg'
import notificationsIcon from '../../assets/icons/nav-notifications.svg'
import disputesIcon from '../../assets/icons/nav-disputes.svg'
import cmsIcon from '../../assets/icons/nav-cms.svg'
import profileIcon from '../../assets/icons/nav-profile.svg'
import settingsIcon from '../../assets/icons/nav-settings.svg'
import styles from './NavMenu.module.scss'

interface NavItem {
  label: string
  icon: string
}

interface NavGroup {
  title?: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    items: [
      { label: 'Dashboard', icon: dashboardIcon },
      { label: 'Database', icon: databaseIcon },
    ],
  },
  {
    title: 'Main Modules',
    items: [
      { label: 'Matchmaking', icon: matchmakingIcon },
      { label: 'Instant Book', icon: instantBookIcon },
      { label: 'Smart Pricing', icon: smartPricingIcon },
      { label: 'Data Engine', icon: dataEngineIcon },
    ],
  },
  {
    title: 'Configuration',
    items: [
      { label: 'Service Catalog', icon: serviceCatalogIcon },
      { label: 'Rating System', icon: ratingSystemIcon },
      { label: 'Rules', icon: rulesIcon },
      { label: 'Unit Economics', icon: unitEconomicsIcon },
    ],
  },
  {
    title: 'Operations',
    items: [
      { label: 'Notifications', icon: notificationsIcon },
      { label: 'Disputes', icon: disputesIcon },
      { label: 'CMS', icon: cmsIcon },
    ],
  },
  {
    title: 'Account',
    items: [
      { label: 'Profile', icon: profileIcon },
      { label: 'Settings', icon: settingsIcon },
    ],
  },
]

interface NavMenuProps {
  variant: 'sidebar' | 'drawer'
  activeLabel: string
}

function NavMenu({ variant, activeLabel }: NavMenuProps) {
  return (
    <nav className={`${styles.menu} ${styles[variant]}`}>
      {navGroups.map((group, index) => (
        <Fragment key={group.title ?? 'top'}>
          {index > 0 && <div className={styles.divider} />}
          <div className={styles.group}>
            {group.title && <p className={styles.groupTitle}>{group.title}</p>}
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className={item.label === activeLabel ? `${styles.item} ${styles.active}` : styles.item}
                  >
                    <img className={styles.icon} src={item.icon} alt="" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Fragment>
      ))}
    </nav>
  )
}

export default NavMenu