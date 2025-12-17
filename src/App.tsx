import { Box, ThemeProvider} from '@mui/material'
import ItemDisplay from './ui/components/display/ItemDisplay'
import MenuBar from './ui/components/menu/MenuBar'
import { FiltersProvider } from './ui/context/FilterContext'
import {darkTheme} from './ui/theme/Theme'
import { DataProvider } from './ui/context/DataContext'
import { forgeIngredients } from './ui/utils/ingredients'
import { forgeableAuctionItems } from './ui/utils/itemGroups'
import { forgeableItems } from './ui/utils/forgeableItems'

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
        <DataProvider>
          <FiltersProvider>
            <MenuBar />
            <ItemDisplay />
          </FiltersProvider>
        </DataProvider>
      </Box>
    </ThemeProvider>
  )
}

export default App
