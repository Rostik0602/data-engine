import arrowIcon from '../../assets/icons/kpi-arrow-up.svg'
import styles from './KpiCard.module.scss'

interface KpiCardProps {
  label: string
  value: string
  meta: string
  showArrow: boolean
}

function KpiCard({ label, value, meta, showArrow }: KpiCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <div className={styles.body}>
        <p className={styles.value}>{value}</p>
        <div className={styles.meta}>
          {showArrow && <img src={arrowIcon} alt="" />}
          <span>{meta}</span>
        </div>
      </div>
    </div>
  )
}

export default KpiCard