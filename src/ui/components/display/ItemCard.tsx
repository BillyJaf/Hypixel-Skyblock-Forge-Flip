import React from "react";
import styles from "./ItemDisplay.module.css"
import { Box, Typography } from "@mui/material";
import type { ForgeItem } from "../../types/forge.ts";
import ItemCardData from "./ItemCardData.tsx";
import { useFilters } from "../../context/FilterContext.tsx";
import { timeVisualiser } from "../../utils/time.ts";

const itemCardMainBoxStyle = {
    width: 360,
    height: 240,
    border: "2px solid black",
    boxShadow: 24,
    p: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    outline: "none",
    color: "text.primary",
    bgcolor: "background.paper",
};

const itemCardHeaderBoxStyle = {
  fontSize: 20,
  fontWeight: 600,
  pb: 1,
  borderBottom: "1px solid grey",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}

interface ItemCardProps {
    forgeItem: ForgeItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ forgeItem }: ItemCardProps) => {
  
  const { filters } = useFilters();
  const itemTime = timeVisualiser(forgeItem.secondsToForge, filters.quickForge, filters.coleQuickForge);

  return (
    <Box sx={itemCardMainBoxStyle}>
        <Box sx={itemCardHeaderBoxStyle}>
            <img src={`src/assets/items/${forgeItem.imageName}.webp`} className={styles.itemCard} />
            <Typography variant="h6" component="div">
                {forgeItem.displayName}
            </Typography>
        </Box>
        <ItemCardData title={`Ingredients ${filters.buyFrom}:`} data={"0"}/>
        <ItemCardData title={`Product ${filters.sellTo}:`} data={"0"}/>
        <ItemCardData title={"Time To Forge:"} data={`${itemTime}`}/>
        <ItemCardData title={`${filters.sortBy}:`} data={filters.sortBy === "Profit Per Hour" ? `${forgeItem.profitPerHour}` : `${forgeItem.profitPerForge}`}/>
    </Box>
  );
};

export default ItemCard;