import KpiCard from './components/KpiCard/KpiCard'
import CategoriesCard from './components/CategoriesCard/CategoriesCard'
import LocationsCard from './components/LocationsCard/LocationsCard'
import EventsCard from './components/EventsCard/EventsCard'
import styles from './App.module.scss'

interface Kpi {
  label: string
  value: string
  meta: string
  showArrow: boolean
}

const kpis: Kpi[] = [
  { label: 'DATA TODAY', value: '1,842', meta: 'Events / interactions', showArrow: false },
  { label: 'SEARCHES', value: '456', meta: '22% vs yesterday', showArrow: true },
  { label: 'CONVERSION', value: '12.4%', meta: '1.8pp this week', showArrow: true },
  { label: 'TIME TO BOOK', value: '3.2 min', meta: '0.8 min faster', showArrow: true },
]

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <main className={styles.content}>
          <div className={styles.container}>
            <div className={styles.pageHeader}>
              <div className={styles.titleBlock}>
                <h1 className={styles.title}>Data Engine</h1>
                <p className={styles.subtitle}>Live data, analytics, and market metrics.</p>
              </div>
              <div className={styles.kpiGrid}>
                {kpis.map((kpi) => (
                  <KpiCard
                    key={kpi.label}
                    label={kpi.label}
                    value={kpi.value}
                    meta={kpi.meta}
                    showArrow={kpi.showArrow}
                  />
                ))}
              </div>
            </div>
            <div className={styles.columns}>
              <CategoriesCard />
              <LocationsCard />
            </div>
            <EventsCard />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App