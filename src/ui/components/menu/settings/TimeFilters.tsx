import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

interface TimeFilterToggles {
    quickForge: boolean;
    setQuickForge: (quickForge: boolean) => void;
    coleQuickForge: boolean;
    setColeQuickForge: (coleQuickForge: boolean) => void;
}

const TimeFilters: React.FC<TimeFilterToggles> = ( {quickForge, setQuickForge, coleQuickForge, setColeQuickForge}: TimeFilterToggles) => {

  const toggleQuickForge = (
    <FormControlLabel control={<Switch checked={quickForge} onClick={() => setQuickForge(!quickForge)}/>} label="Apply Quick Forge" />
  );

  const toggleColeQuickForge = (
    <FormControlLabel control={<Switch checked={coleQuickForge} onClick={() => setColeQuickForge(!coleQuickForge)}/>} label="Apply Cole Quick Forge" />
  );

  return (
    <FormGroup>
      {toggleQuickForge}
      {toggleColeQuickForge}
    </FormGroup>
  );
};

export default TimeFilters;