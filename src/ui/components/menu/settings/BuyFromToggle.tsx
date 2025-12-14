import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { BuyFrom } from "../../../types/sort";

interface BuyFromToggleProps {
    buyFrom: BuyFrom;
    setBuyFrom: (buyFrom: BuyFrom) => void;
}

const BuyFromToggle: React.FC<BuyFromToggleProps> = ( {buyFrom, setBuyFrom}: BuyFromToggleProps) => {
  return (
    <ToggleButtonGroup
        color="primary"
        value={buyFrom}
        exclusive
        onChange={(_, value) => setBuyFrom(value)}
        aria-label="Platform"
        sx={{width: "100%"}}
    >
        <ToggleButton value="Insta Buy" sx={{width: "100%"}}>Insta Buy</ToggleButton>
        <ToggleButton value="Buy Order" sx={{width: "100%"}}>Buy Order</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default BuyFromToggle;