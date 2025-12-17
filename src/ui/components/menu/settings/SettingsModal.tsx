import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Modal } from '@mui/material';
import { useFilters } from '../../../context/FilterContext';
import type { BuyFrom, SellTo, SortBy } from '../../../types/sort';
import SortToggle from './SortToggle';
import BuyFromToggle from './BuyFromToggle';
import SellToToggle from './SellToToggle';
import TimeFilters from './TimeFilters';

const mainBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  height: 420,
  border: '2px solid black',
  boxShadow: 24,
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 5,
  outline: 'none',
  color: 'text.primary',
  bgcolor: 'background.paper',
};

const headerBoxStyle = {
  fontSize: 20,
  fontWeight: 600,
  pb: 1,
  borderBottom: '1px solid grey',
  px: 4,
  width: '80%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

interface SettingsOpen {
  settingsOpen: boolean;
  setSettingsOpen: (filterOpen: boolean) => void;
}

const SettingsModal: React.FC<SettingsOpen> = ({
  settingsOpen,
  setSettingsOpen,
}: SettingsOpen) => {
  const { filters, setFilters } = useFilters();

  const [quickForge, setQuickForge] = useState<boolean>(filters.quickForge);
  const [coleQuickForge, setColeQuickForge] = useState<boolean>(
    filters.coleQuickForge
  );
  const [sortBy, setSortBy] = useState<SortBy>(filters.sortBy);
  const [buyFrom, setBuyFrom] = useState<BuyFrom>(filters.buyFrom);
  const [sellTo, setSellTo] = useState<SellTo>(filters.sellTo);

  const applyFilters = (
    <Button
      variant="contained"
      onClick={() => {
        setFilters({
          ...filters,
          quickForge,
          coleQuickForge,
          sortBy,
          buyFrom,
          sellTo,
        });
        setSettingsOpen(false);
      }}
      disabled={false}
    >
      Apply Filters
    </Button>
  );

  return (
    <Modal
      open={settingsOpen}
      onClose={() => setSettingsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      color="inherit"
    >
      <Box sx={mainBoxStyle}>
        <Box sx={headerBoxStyle}>
          <Typography variant="h6" component="div">
            Settings
          </Typography>
        </Box>
        <TimeFilters
          quickForge={quickForge}
          setQuickForge={setQuickForge}
          coleQuickForge={coleQuickForge}
          setColeQuickForge={setColeQuickForge}
        />
        <SortToggle sortBy={sortBy} setSortBy={setSortBy} />
        <BuyFromToggle buyFrom={buyFrom} setBuyFrom={setBuyFrom} />
        <SellToToggle sellTo={sellTo} setSellTo={setSellTo} />
        {applyFilters}
      </Box>
    </Modal>
  );
};

export default SettingsModal;
