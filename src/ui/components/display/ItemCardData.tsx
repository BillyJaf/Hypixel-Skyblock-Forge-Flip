import React from "react";
import { Box, Typography } from "@mui/material";

interface ItemCardDataProps {
    title: string;
    data: string;
}

const ItemCardData: React.FC<ItemCardDataProps> = ({ title, data }: ItemCardDataProps) => {
  return (
    <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Typography component="div">
          {title}
        </Typography>
        <Typography component="div">
          {data}
        </Typography>
    </Box>
  );
};

export default ItemCardData;