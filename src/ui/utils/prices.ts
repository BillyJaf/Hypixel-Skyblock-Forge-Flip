import type { QuickStatus } from '../../api/types';
import type { Filters } from '../context/FilterContext';
import type { ForgeItem, IngredientItem } from '../types/forge';

export const fillBazaarIngredientPrices = (
  ingredientItems: IngredientItem[],
  quickStatuses: QuickStatus[]
) => {
  ingredientItems.forEach((ingredientItem) => {
    for (let quickStatus of quickStatuses) {
      if (ingredientItem.apiName === quickStatus.productId) {
        ingredientItem.buyOrderPrice = quickStatus.sellPrice;
        ingredientItem.instaBuyPrice = quickStatus.buyPrice;
        break;
      }
    }
    if (ingredientItem.whereToBuy === 'bazaar') {
      ingredientItem.dataIsFetched = true;
    }
  });
  return ingredientItems;
};

export const fillBazaarItemPrices = (
  forgeItems: ForgeItem[],
  quickStatuses: QuickStatus[]
) => {
  forgeItems.forEach((forgeItem) => {
    for (let quickStatus of quickStatuses) {
      if (forgeItem.apiName === quickStatus.productId) {
        forgeItem.sellOfferPrice = quickStatus.buyPrice;
        forgeItem.instaSellPrice = quickStatus.sellPrice;
        forgeItem.dataIsFetched = true;
        break;
      }
    }
    if (forgeItem.whereToSell === 'bazaar') {
      forgeItem.dataIsFetched = true;
    }
  });
  return forgeItems;
};

export const fillProfitAndIngredientPrices = (
  forgeItems: ForgeItem[],
  filters: Filters
) => {
  forgeItems.forEach((forgeItem) => {
    forgeItem.ingredientsPrice = calculateIngredientPrice(forgeItem, filters);
    forgeItem.profit = calculateProfit(forgeItem, filters);
  });
  return forgeItems;
};

const calculateIngredientPrice = (forgeItem: ForgeItem, filters: Filters) => {
  let price = 0;
  for (let ingredient of forgeItem.ingredients) {
    if (filters.buyFrom === 'Buy Order') {
      if (ingredient.item.buyOrderPrice === null) {
        return null;
      }
      price += ingredient.quantity * ingredient.item.buyOrderPrice;
    } else {
      if (ingredient.item.instaBuyPrice === null) {
        return null;
      }
      price += ingredient.quantity * ingredient.item.instaBuyPrice;
    }
  }
  return price;
};

const calculateProfit = (forgeItem: ForgeItem, filters: Filters) => {
  let price = 0;
  const ingredientPrice = calculateIngredientPrice(forgeItem, filters);
  const quickForgeMultiplier = filters.quickForge ? 0.7 : 1;
  const coleQuickForgeMultiplier = filters.coleQuickForge ? 0.75 : 1;
  const timeDivider =
    filters.sortBy === 'Profit Per Forge'
      ? 1
      : (forgeItem.secondsToForge / 3600) *
        quickForgeMultiplier *
        coleQuickForgeMultiplier;

  if (ingredientPrice === null) {
    return null;
  }

  if (filters.sellTo === 'Insta Sell') {
    if (forgeItem.instaSellPrice === null) {
      return null;
    }
    price = (forgeItem.instaSellPrice - ingredientPrice) / timeDivider;
  } else {
    if (forgeItem.sellOfferPrice === null) {
      return null;
    }
    price = (forgeItem.sellOfferPrice - ingredientPrice) / timeDivider;
  }

  return price;
};

export const fillAuctionIngredientPrices = (
  ingredientItems: IngredientItem[],
  LBINs: { [displayName: string]: number | null }
) => {
  ingredientItems.forEach((ingredientItem) => {
    if (ingredientItem.apiName in LBINs) {
      ingredientItem.buyOrderPrice = LBINs[ingredientItem.apiName];
      ingredientItem.instaBuyPrice = LBINs[ingredientItem.apiName];
    }
    if (ingredientItem.whereToBuy === 'auction') {
      ingredientItem.dataIsFetched = true;
    }
  });
  return ingredientItems;
};

export const fillAuctionItemPrices = (
  forgeItems: ForgeItem[],
  LBINs: { [displayName: string]: number | null }
) => {
  forgeItems.forEach((forgeItem) => {
    if (forgeItem.apiName in LBINs) {
      forgeItem.sellOfferPrice = LBINs[forgeItem.apiName];
      forgeItem.instaSellPrice = LBINs[forgeItem.apiName];
    } else if (forgeItem.displayName in LBINs) {
      forgeItem.sellOfferPrice = LBINs[forgeItem.displayName];
      forgeItem.instaSellPrice = LBINs[forgeItem.displayName];
    }
    if (forgeItem.whereToSell === 'auction') {
      forgeItem.dataIsFetched = true;
    }
  });
  return forgeItems;
};
