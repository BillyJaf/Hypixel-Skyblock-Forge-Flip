import { Box, ThemeProvider} from '@mui/material'
import ItemDisplay from './ui/components/display/ItemDisplay'
import MenuBar from './ui/components/menu/MenuBar'
import { FiltersProvider } from './ui/context/FilterContext'
import {darkTheme} from './ui/theme/Theme'

const backgroundStyle = {
  bgcolor: "background.default",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={backgroundStyle}>
        <FiltersProvider>
          <MenuBar />
          <ItemDisplay />
        </ FiltersProvider>
      </Box>
    </ThemeProvider>
  )
}

export default App
