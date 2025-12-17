import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { useFilters } from "../../../context/FilterContext";

const RefetchBazaar: React.FC = () => {
  const { } = useFilters();

  return (
    <Tooltip title={"Refetch Bazaar Items"}>
      <IconButton
        size="large"
        color="inherit"
        aria-label="settings"
        sx={{ mr: 2 }}
        onClick={() => {}}
      >
        <ShoppingCartIcon />
      </IconButton>
    </Tooltip>
  );
};

export default RefetchBazaar;