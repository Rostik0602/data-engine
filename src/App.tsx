import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <main className={styles.content}>
          <div className={styles.pageHeader}>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>Data Engine</h1>
              <p className={styles.subtitle}>Live data, analytics, and market metrics.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App