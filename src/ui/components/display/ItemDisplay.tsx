import React from "react";
import ItemCard from "./ItemCard";
import { forgeableItems } from "../../utils/forgeableItems";
import { Box } from "@mui/material";
import { useFilters } from "../../context/FilterContext";
import { applyFilters } from "../../utils/filters";
import { forgeableAuctionItems, forgeableBazaarItems } from "../../utils/itemGroups";

export const itemCardDisplay = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  overflowY: "auto",
  justifyContent: "space-between",
  gap: 10,
  p: "5%",
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}

const ItemDisplay: React.FC = () => {
  const { filters } = useFilters();
  const filteredItems = applyFilters(forgeableItems, filters);

  return (
    <Box sx={itemCardDisplay}>
        {filteredItems.map((forgeItem) => {
            return (
            <Box key={`${forgeItem.displayName}-Card`}>
                <ItemCard forgeItem={forgeItem} />
            </Box>
            )
        })}
    </Box>
  );
};

export default ItemDisplay;