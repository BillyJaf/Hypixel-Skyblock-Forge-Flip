import React from "react";
import styles from "./ItemDisplay.module.css"
import { Box, Typography } from "@mui/material";
import { itemCardHeaderBoxStyle, mainBoxStyle } from "../../utils/constants";

const ItemCard: React.FC = () => {
  
  const cardHeight = 240;
  const cardWidth = 360;
  return (
    <Box sx={mainBoxStyle(cardHeight, cardWidth)}>
        <Box sx={itemCardHeaderBoxStyle}>
            <img src={`src/assets/items/Amber_Material.webp`} className={styles.itemCard} />
            <Typography variant="h6" component="div">
                Example Card
            </Typography>
        </Box>
    </Box>
  );
};

export default ItemCard;