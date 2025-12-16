import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FilterModal from "./filters/FilterModal";
import { Settings } from "@mui/icons-material";
import SettingsModal from "./settings/SettingsModal";
import SearchBar from "./search.tsx/SearchBar";

const MenuBar: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setFilterOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hypixel Skyblock Forge Flipper
          </Typography>
          <SearchBar />
          <IconButton
            size="large"
            color="inherit"
            aria-label="settings"
            sx={{ mr: 2 }}
            onClick={() => setSettingsOpen(true)}
          >
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    {filterOpen && <FilterModal filterOpen={filterOpen} setFilterOpen={setFilterOpen} />}
    {settingsOpen && <SettingsModal settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} />}
    </>
  );
};

export default MenuBar;