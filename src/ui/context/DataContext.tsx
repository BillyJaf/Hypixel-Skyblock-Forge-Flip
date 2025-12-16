import { createContext, useContext, useEffect, useState } from "react";
import type { ForgeItem, IngredientItem } from "../types/forge";
import { forgeIngredients } from "../utils/ingredients";
import { forgeableItems } from "../utils/forgeableItems";
import { fetchBazaarQuickStatus } from "../../api/getBazaar";
import { fillBazaarIngredientPrices, fillBazaarItemPrices } from "../utils/prices";

export interface Data {
  ingredients: IngredientItem[];
  setIngredients: (ingredients: IngredientItem[]) => void;
  items: ForgeItem[];
  setItems: (items: ForgeItem[]) => void;
}

const DataContext = createContext<Data | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ingredients, setIngredients] = useState<IngredientItem[]>(forgeIngredients);
  const [items, setItems] = useState<ForgeItem[]>(forgeableItems);
  
  useEffect(() => {
    fetchBazaarQuickStatus().then((quickStatuses) => {

      // const ingredientsWithPrices = fillBazaarIngredientPrices(ingredients, quickStatuses)
      // setIngredients(ingredientsWithPrices.map(item => ({ ...item })))

      // const itemsWithPrices = fillBazaarItemPrices(items, quickStatuses)
      // setItems(itemsWithPrices.map(item => ({ ...item })))
    })
  }, []);

  return (
    <DataContext.Provider value={{ ingredients, setIngredients, items, setItems }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("No context provided.");
  }
  return context;
};