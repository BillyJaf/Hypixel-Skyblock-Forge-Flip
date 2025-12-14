import type { Filters } from "../context/FilterContext";

export const defaultFilters: Filters = {
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

export const mainBoxStyle = (height: number, width: number) => {
    return {   
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width,
        height,
        bgcolor: "white",
        border: "2px solid black",
        boxShadow: 24,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        outline: "none",
    }
};

export const headerBoxStyle = {
  fontSize: 20,
  fontWeight: 600,
  pb: 1,
  borderBottom: "1px solid grey",
  px: 4,
  width: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const itemCardHeaderBoxStyle = {
  fontSize: 20,
  fontWeight: 600,
  pb: 1,
  borderBottom: "1px solid grey",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
}