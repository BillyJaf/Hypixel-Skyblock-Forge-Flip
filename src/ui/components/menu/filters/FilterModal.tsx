import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Modal } from "@mui/material";
import BazaarFilters from "./BazaarFilters";
import { useFilters } from "../../../context/FilterContext";
import AuctionFilters from "./AuctionFilters";
import TimeFilters from "./TimeFilters";

const mainBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  height: 480,
  bgcolor: "white",
  border: "2px solid black",
  boxShadow: 24,
  p: 3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: 5,
  outline: "none",
};

const headerBoxStyle = {
  fontSize: 20,
  fontWeight: 600,
  pb: 1,
  borderBottom: "1px solid grey",
  px: 4,
  width: "80%",
  display: "flex",
  justifyContent: "center",
};


interface FilterOpen {
    filterOpen: boolean;
    setFilterOpen: (filterOpen: boolean) => void;
}

const FilterModal: React.FC<FilterOpen> = ( {filterOpen, setFilterOpen} : FilterOpen) => {
  const { filters, setFilters } = useFilters();

  const [searchItem, setSearchItem] = useState<string>(filters.searchItem);
  const [quickForge, setQuickForge] = useState<boolean>(filters.quickForge);
  const [coleQuickForge, setColeQuickForge] = useState<boolean>(filters.coleQuickForge);
  const [includeBazaarItems, setIncludeBazaarItems] = useState<boolean>(filters.includeBazaarItems);
  const [includeGemstones, setIncludeGemstones] = useState<boolean>(filters.includeGemstones);
  const [includeReforges, setIncludeReforges] = useState<boolean>(filters.includeReforges);
  const [includeAuctionItems, setIncludeAuctionItems] = useState<boolean>(filters.includeAuctionItems);
  const [includePets, setIncludePets] = useState<boolean>(filters.includePets);
  const [includeTools, setIncludeTools] = useState<boolean>(filters.includeTools);

  const applyFilters = (
    <Button
      variant="contained"
      onClick={() => {
        setFilters({
          searchItem, quickForge, coleQuickForge, includeBazaarItems, includeGemstones, includeReforges, includeAuctionItems, includePets, includeTools
        })
        setFilterOpen(false)
      }}
      disabled={false}
    >
      Apply Filters
    </Button>
  );

  return (
    <Modal
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={mainBoxStyle}>
            <Box sx={headerBoxStyle}>
                <Typography variant="h6" component="div">
                    Filter Items
                </Typography>
            </Box>
            <TimeFilters quickForge={quickForge} setQuickForge={setQuickForge} coleQuickForge={coleQuickForge} setColeQuickForge={setColeQuickForge} />
            <BazaarFilters includeBazaarItems={includeBazaarItems} setIncludeBazaarItems={setIncludeBazaarItems} includeGemstones={includeGemstones} setIncludeGemstones={setIncludeGemstones} includeReforges={includeReforges} setIncludeReforges={setIncludeReforges}/>
            <AuctionFilters includeAuctionItems={includeAuctionItems} setIncludeAuctionItems={setIncludeAuctionItems} includePets={includePets} setIncludePets={setIncludePets} includeTools={includeTools} setIncludeTools={setIncludeTools}/>
            {applyFilters}
        </Box>
    </Modal>
  );
};

export default FilterModal;