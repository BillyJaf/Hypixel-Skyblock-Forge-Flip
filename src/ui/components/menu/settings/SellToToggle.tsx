import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { SellTo } from '../../../types/sort';

interface SellToToggleProps {
  sellTo: SellTo;
  setSellTo: (sellTo: SellTo) => void;
}

const SellToToggle: React.FC<SellToToggleProps> = ({
  sellTo,
  setSellTo,
}: SellToToggleProps) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={sellTo}
      exclusive
      onChange={(_, value) => setSellTo(value)}
      aria-label="Platform"
      sx={{ width: '100%' }}
    >
      <ToggleButton value="Insta Sell" sx={{ width: '100%' }}>
        Insta Sell
      </ToggleButton>
      <ToggleButton value="Sell Offer" sx={{ width: '100%' }}>
        Sell Offer
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SellToToggle;
