import React from "react";
import styles from "./ItemDisplay.module.css"
import ItemCard from "./ItemCard";
import { forgeableItems } from "../../utils/forgeableItems";
import { Box } from "@mui/material";

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

  return (
    <Box sx={itemCardDisplay}>
        {forgeableItems.map((forgeItem) => {
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