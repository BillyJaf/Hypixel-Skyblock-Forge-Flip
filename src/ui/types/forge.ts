export type Market = "bazaar" | "auction" | "purse";

export interface IngredientItem {
  apiName: string;
  whereToBuy: Market;
  instaBuyPrice: number | null;
  buyOrderPrice: number | null; // If whereToBuy == auction, then there is no buy order price
}

export interface Ingredient {
  quantity: number;
  item: IngredientItem;
}

export interface ForgeItem {
  displayName: string;
  imageName: string;
  apiName: string;
  whereToSell: Market;
  secondsToForge: number;
  ingredients: Ingredient[];
  instaSellPrice: number | null;
  sellOfferPrice: number | null; // If whereToBuy == auction, then there is no buy order price
  profitPerHour: number | null;
  profitPerForge: number | null;
}

export interface QuickStatus {
  productId: string;
  sellPrice: number;
  sellVolume: number;
  sellMovingWeek: number;
  sellOrders: number;
  buyPrice: number;
  buyVolume: number;
  buyMovingWeek: number;
  buyOrders: number;
}

