import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { SortBy } from "../../../types/sort";

interface SortToggleProps {
    sortBy: SortBy;
    setSortBy: (sortBy: SortBy) => void;
}

const SortToggle: React.FC<SortToggleProps> = ( {sortBy, setSortBy}: SortToggleProps) => {
  return (
    <ToggleButtonGroup
        color="primary"
        value={sortBy}
        exclusive
        onChange={(_, value) => setSortBy(value)}
        aria-label="Platform"
        sx={{width: "100%"}}
    >
        <ToggleButton value="Profit Per Hour" sx={{width: "100%"}}>Profit Per Hour</ToggleButton>
        <ToggleButton value="Profit Per Forge" sx={{width: "100%"}}>Profit Per Forge</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SortToggle;