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
  if (!filters.includeBazaarItems) {
      forgeItems = forgeItems.filter(forgeItem => !forgeableBazaarItems.includes(forgeItem.displayName));
  }

  if (!filters.includeGemstones) {
      forgeItems = forgeItems.filter(forgeItem => !forgeableGemstones.includes(forgeItem.displayName));
  }

  if (!filters.includeReforges) {
      forgeItems = forgeItems.filter(forgeItem => !forgeableReforges.includes(forgeItem.displayName));
  }

    if (!filters.includeAuctionItems) {
      forgeItems = forgeItems.filter(forgeItem => !forgeableAuctionItems.includes(forgeItem.displayName));
  }

  if (!filters.includePets) {
      forgeItems = forgeItems.filter(forgeItem => !forgeablePets.includes(forgeItem.displayName));
  }

  if (!filters.includeTools) {
      forgeItems = forgeItems.filter(forgeItem => !forgeableTools.includes(forgeItem.displayName));
  }

  return forgeItems
}