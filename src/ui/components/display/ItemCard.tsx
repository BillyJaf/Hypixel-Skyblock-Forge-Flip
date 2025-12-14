import React from "react";
import styles from "./ItemDisplay.module.css"
import { Box, Typography } from "@mui/material";
import type { ForgeItem } from "../../types/forge.ts";

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

  return (
    <Box sx={itemCardMainBoxStyle}>
        <Box sx={itemCardHeaderBoxStyle}>
            <img src={`src/assets/items/${forgeItem.imageName}.webp`} className={styles.itemCard} />
            <Typography variant="h6" component="div">
                {forgeItem.displayName}
            </Typography>
        </Box>
    </Box>
  );
};

export default ItemCard;