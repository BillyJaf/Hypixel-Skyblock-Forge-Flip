import { ThemeProvider } from '@mui/material'
import ItemDisplay from './ui/components/display/ItemDisplay'
import MenuBar from './ui/components/menu/MenuBar'
import { FiltersProvider } from './ui/context/FilterContext'
import theme from './ui/theme/Theme'
import styles from "./App.module.css"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
      <FiltersProvider>
        <MenuBar />
        <ItemDisplay />
      </ FiltersProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
