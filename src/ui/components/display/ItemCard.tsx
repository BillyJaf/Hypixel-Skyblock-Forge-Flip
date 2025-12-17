import React from "react";
import styles from "./ItemDisplay.module.css"
import { Box, Typography } from "@mui/material";
import type { ForgeItem } from "../../types/forge.ts";
import ItemCardData from "./ItemCardData.tsx";
import { useFilters, type Filters } from "../../context/FilterContext.tsx";
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

  const ingredientsPrice = readableIngredientPrice(forgeItem);
  const productPrice = filters.sellTo === "Sell Offer" ? readableItemPrice(forgeItem, filters) : readableItemPrice(forgeItem, filters);
  const itemTime = `${timeVisualiser(forgeItem.secondsToForge, filters.quickForge, filters.coleQuickForge)}`;
  const profitData = readableProfit(forgeItem);
  const sellProduct = forgeItem.whereToSell === "bazaar" ? `Product ${filters.sellTo}:` : `Product LBIN:`;

  return (
    <Box sx={itemCardMainBoxStyle}>
        <Box sx={itemCardHeaderBoxStyle}>
            <img src={`src/assets/items/${forgeItem.imageName}.webp`} className={styles.itemCard} />
            <Typography variant="h6" component="div">
                {forgeItem.displayName}
            </Typography>
        </Box>
        <ItemCardData title={"Time To Forge:"} data={itemTime}/>
        <ItemCardData title={`Ingredients ${filters.buyFrom}:`} data={ingredientsPrice}/>
        <ItemCardData title={sellProduct} data={productPrice}/>
        <ItemCardData title={`${filters.sortBy}:`} data={profitData}/>
    </Box>
  );
};

export default ItemCard;

const readableProfit = (forgeItem: ForgeItem) => {
  for (const ingredient of forgeItem.ingredients) {
    if (!ingredient.item.dataIsFetched) {
      return "Loading Data..."
    }
  }
  if (!forgeItem.dataIsFetched) {
    return "Loading Data..."
  }
  if (forgeItem.profit === null) {
    return "No Data Available"
  }
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(Math.trunc(forgeItem.profit * 10) / 10);
}

const readableItemPrice = (forgeItem: ForgeItem, filters: Filters) => {
  if (!forgeItem.dataIsFetched) {
    return "Loading Data..."
  }
  let price = 0;
  if (filters.sellTo === "Sell Offer") {
    if (forgeItem.sellOfferPrice === null) {
      return "No Data Available"
    }
    price = forgeItem.sellOfferPrice;
  } else {
    if (forgeItem.instaSellPrice === null) {
      return "No Data Available"
    }
    price = forgeItem.instaSellPrice;
  }
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(Math.trunc(price * 10) / 10);
}

const readableIngredientPrice = (forgeItem: ForgeItem) => {
  for (const ingredient of forgeItem.ingredients) {
    if (!ingredient.item.dataIsFetched) {
      return "Loading Data..."
    }
  }

  if (forgeItem.ingredientsPrice === null) {
    return "No Data Available"
  } 

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(Math.trunc(forgeItem.ingredientsPrice! * 10) / 10);
}