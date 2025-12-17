import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import { fetchBazaarQuickStatus } from '../../../../api/getBazaar';
import {
  fillBazaarIngredientPrices,
  fillBazaarItemPrices,
} from '../../../utils/prices';
import { useData } from '../../../context/DataContext';

const RefetchBazaar: React.FC = () => {
  const { items, setItems, ingredients, setIngredients } = useData();

  const [fetchingData, setFetchingData] = useState<boolean>(false);

  const handleBazaarRefresh = () => {
    setFetchingData(true);
    unfetchBazaarData();
    fetchBazaarQuickStatus().then((quickStatuses) => {
      const ingredientsWithPrices = fillBazaarIngredientPrices(
        ingredients,
        quickStatuses
      );
      setIngredients(ingredientsWithPrices.map((item) => ({ ...item })));

      const itemsWithPrices = fillBazaarItemPrices(items, quickStatuses);
      setItems(itemsWithPrices.map((item) => ({ ...item })));

      setFetchingData(false);
    });
  };

  const unfetchBazaarData = () => {
    items.forEach((item) => {
      if (item.whereToSell === 'bazaar') {
        item.dataIsFetched = false;
      }
    });
    setItems([...items]);

    ingredients.forEach((ingredient) => {
      if (ingredient.whereToBuy === 'bazaar') {
        ingredient.dataIsFetched = false;
      }
    });
    setIngredients([...ingredients]);
  };

  return (
    <Tooltip title={'Refetch Bazaar Items'}>
      <IconButton
        size="large"
        color="inherit"
        aria-label="settings"
        sx={{ mr: 2 }}
        onClick={handleBazaarRefresh}
        disabled={fetchingData}
      >
        {fetchingData ? (
          <CircularProgress sx={{ color: 'inherit' }} />
        ) : (
          <ShoppingCartIcon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default RefetchBazaar;
