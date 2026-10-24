import { ArrowUp } from 'lucide-react'
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
          {showArrow && <ArrowUp size={12} strokeWidth={1.3} absoluteStrokeWidth />}
          <span>{meta}</span>
        </div>
      </div>
    </div>
  )
}

export default KpiCard