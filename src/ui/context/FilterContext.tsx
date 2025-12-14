import { createContext, useContext, useState } from "react";
import { defaultFilters } from "../utils/constants";
import type { BuyFrom, SellTo, SortBy } from "../types/sort";

export interface Filters {
  sortBy: SortBy;
  buyFrom: BuyFrom;
  sellTo: SellTo;
  searchItem: string;
  quickForge: boolean;
  coleQuickForge: boolean;
  includeBazaarItems: boolean;
  includeGemstones: boolean;
  includeReforges: boolean;
  includeAuctionItems: boolean;
  includePets: boolean;
  includeTools: boolean;
}

export interface FilterForm {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const FiltersContext = createContext<FilterForm | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("No context provided.");
  }
  return context;
};