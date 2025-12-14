import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

interface AuctionFilterToggles {
    includeAuctionItems: boolean;
    setIncludeAuctionItems: (includeBazaarItems: boolean) => void;
    includePets: boolean;
    setIncludePets: (includeGemstones: boolean) => void;
    includeTools: boolean;
    setIncludeTools: (includeReforges: boolean) => void;
}

const AuctionFilters: React.FC<AuctionFilterToggles> = ( {includeAuctionItems, setIncludeAuctionItems, includePets, setIncludePets, includeTools, setIncludeTools}: AuctionFilterToggles) => {

  const toggleIncludeAuctionItems = (
    <FormControlLabel control={<Switch checked={includeAuctionItems} onClick={() => setIncludeAuctionItems(!includeAuctionItems)}/>} label="Include Auction Items" />
  );

  const toggleIncludePets = (
    <FormControlLabel disabled={!includeAuctionItems} control={<Switch checked={includePets} onClick={() => setIncludePets(!includePets)}/>} label="Include Pets" />
  );

  const toggleIncludeTools = (
    <FormControlLabel disabled={!includeAuctionItems} control={<Switch checked={includeTools} onClick={() => setIncludeTools(!includeTools)}/>} label="Include Tools" />
  );

  return (
    <FormGroup>
      {toggleIncludeAuctionItems}
      {toggleIncludePets}
      {toggleIncludeTools}
    </FormGroup>
  );
};

export default AuctionFilters;