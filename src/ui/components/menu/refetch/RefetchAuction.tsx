import StorefrontIcon from '@mui/icons-material/Storefront';
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { useFilters } from "../../../context/FilterContext";

const RefetchAuction: React.FC = () => {
  const { } = useFilters();

  return (
    <Tooltip title={"Refetch Auction Items"}>
      <IconButton
        size="large"
        color="inherit"
        aria-label="settings"
        sx={{ mr: 2 }}
        onClick={() => {}}
      >
        <StorefrontIcon />
      </IconButton>
    </Tooltip>
  );
};

export default RefetchAuction;