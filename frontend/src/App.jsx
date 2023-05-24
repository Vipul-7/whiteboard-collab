import styles from './App.module.css'
import Board from './components/Board/Board'
import Header from './components/Header/Header'

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.board}>
        <Board />
      </div>
    </div>
  )
}

export default App
