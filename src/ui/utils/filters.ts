import type { Filters } from "../context/FilterContext";
import type { ForgeItem } from "../types/forge";
import { forgeableAuctionItems, forgeableBazaarItems, forgeableGemstones, forgeablePets, forgeableReforges, forgeableTools } from "./itemGroups";


export const defaultFilters: Filters = {
  sortBy: "Profit Per Hour",
  buyFrom: "Insta Buy",
  sellTo: "Insta Sell",
  searchItem: "",
  quickForge: false,
  coleQuickForge: false,
  includeBazaarItems: true,
  includeGemstones: true,
  includeReforges: true,
  includeAuctionItems: true,
  includePets: true,
  includeTools: true,
}

export const applyFilters = (forgeItems: ForgeItem[], filters: Filters) => {
  let result = forgeItems;

  if (!filters.includeBazaarItems) {
      result = result.filter(forgeItem => !forgeableBazaarItems.includes(forgeItem.displayName));
  }

  if (!filters.includeGemstones) {
      result = result.filter(forgeItem => !forgeableGemstones.includes(forgeItem.displayName));
  }

  if (!filters.includeReforges) {
      result = result.filter(forgeItem => !forgeableReforges.includes(forgeItem.displayName));
  }

    if (!filters.includeAuctionItems) {
      result = result.filter(forgeItem => !forgeableAuctionItems.includes(forgeItem.displayName));
  }

  if (!filters.includePets) {
      result = result.filter(forgeItem => !forgeablePets.includes(forgeItem.displayName));
  }

  if (!filters.includeTools) {
      result = result.filter(forgeItem => !forgeableTools.includes(forgeItem.displayName));
  }

  result.sort((item1, item2) => {
    if (item1.profit === null && item2.profit === null) {
      return 0;
    } else if (item1.profit === null) {
      return 1;
    } else if (item2.profit === null) {
      return -1;
    } else {
      return item2.profit - item1.profit
    }
  })

  return result.map(item => ({ ...item }));
}