import StorefrontIcon from '@mui/icons-material/Storefront';
import React, { useState } from 'react';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import { useData } from '../../../context/DataContext';
import { fetchAuctionLBINS } from '../../../../api/getAuction';
import {
  fillAuctionIngredientPrices,
  fillAuctionItemPrices,
} from '../../../utils/prices';

const RefetchAuction: React.FC = () => {
  const { items, setItems, ingredients, setIngredients } = useData();

  const [fetchingData, setFetchingData] = useState<boolean>(false);

  const handleAuctionRefresh = () => {
    setFetchingData(true);
    unfetchAuctionData();
    fetchAuctionLBINS().then((LBINs) => {
      const ingredientsWithPrices = fillAuctionIngredientPrices(
        ingredients,
        LBINs
      );
      setIngredients(ingredientsWithPrices.map((item) => ({ ...item })));

      const itemsWithPrices = fillAuctionItemPrices(items, LBINs);
      setItems(itemsWithPrices.map((item) => ({ ...item })));

      setFetchingData(false);
    });
  };

  const unfetchAuctionData = () => {
    items.forEach((item) => {
      if (item.whereToSell === 'auction') {
        item.dataIsFetched = false;
      }
    });
    setItems([...items]);

    ingredients.forEach((ingredient) => {
      if (ingredient.whereToBuy === 'auction') {
        ingredient.dataIsFetched = false;
      }
    });
    setIngredients([...ingredients]);
  };

  return (
    <Tooltip title={'Refetch Auction Items'}>
      <IconButton
        size="large"
        color="inherit"
        aria-label="settings"
        sx={{ mr: 2 }}
        onClick={handleAuctionRefresh}
        disabled={fetchingData}
      >
        {fetchingData ? (
          <CircularProgress sx={{ color: 'inherit' }} />
        ) : (
          <StorefrontIcon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default RefetchAuction;
