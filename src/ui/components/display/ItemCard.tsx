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

  const ingredientsPrice = readablePrice(forgeItem.ingredientsPrice);
  const productPrice = filters.sellTo === "Sell Offer" ? readablePrice(forgeItem.sellOfferPrice) : readablePrice(forgeItem.instaSellPrice);
  const itemTime = `${timeVisualiser(forgeItem.secondsToForge, filters.quickForge, filters.coleQuickForge)}`;
  const profitData = readablePrice(forgeItem.profit);

  return (
    <Box sx={itemCardMainBoxStyle}>
        <Box sx={itemCardHeaderBoxStyle}>
            <img src={`src/assets/items/${forgeItem.imageName}.webp`} className={styles.itemCard} />
            <Typography variant="h6" component="div">
                {forgeItem.displayName}
            </Typography>
        </Box>
        <ItemCardData title={`Ingredients ${filters.buyFrom}:`} data={ingredientsPrice}/>
        <ItemCardData title={`Product ${filters.sellTo}:`} data={productPrice}/>
        <ItemCardData title={"Time To Forge:"} data={itemTime}/>
        <ItemCardData title={`${filters.sortBy}:`} data={profitData}/>
    </Box>
  );
};

export default ItemCard;

const readablePrice = (price: number | null) => {
  if (price !== null) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(Math.trunc(price * 10) / 10);
  } else {
    return "Loading Data..."
  }
}