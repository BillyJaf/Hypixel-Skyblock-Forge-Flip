import type { Filters } from "../context/FilterContext";

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