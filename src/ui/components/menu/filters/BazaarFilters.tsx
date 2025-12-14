import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

interface BazaarFilterToggles {
    includeBazaarItems: boolean;
    setIncludeBazaarItems: (includeBazaarItems: boolean) => void;
    includeGemstones: boolean;
    setIncludeGemstones: (includeGemstones: boolean) => void;
    includeReforges: boolean;
    setIncludeReforges: (includeReforges: boolean) => void;
}

const BazaarFilters: React.FC<BazaarFilterToggles> = ( {includeBazaarItems, setIncludeBazaarItems, includeGemstones, setIncludeGemstones, includeReforges, setIncludeReforges}: BazaarFilterToggles) => {

  const toggleIncludeBazaarItems = (
    <FormControlLabel control={<Switch defaultChecked={includeBazaarItems} onClick={() => setIncludeBazaarItems(!includeBazaarItems)}/>} label="Include Bazaar Items" />
  );

  const toggleIncludeGemstones = (
    <FormControlLabel disabled={!includeBazaarItems} control={<Switch defaultChecked={includeGemstones} onClick={() => setIncludeGemstones(!includeGemstones)}/>} label="Include Gemstones" />
  );

  const toggleIncludeReforges = (
    <FormControlLabel disabled={!includeBazaarItems} control={<Switch defaultChecked={includeReforges} onClick={() => setIncludeReforges(!includeReforges)}/>} label="Include Reforges" />
  );

  return (
    <FormGroup>
      {toggleIncludeBazaarItems}
      {toggleIncludeGemstones}
      {toggleIncludeReforges}
    </FormGroup>
  );
};

export default BazaarFilters;