import type { QuickStatus } from "../../api/types"
import type { Filters } from "../context/FilterContext"
import type { ForgeItem, IngredientItem } from "../types/forge"

export const fillBazaarIngredientPrices = (ingredientItems: IngredientItem[], quickStatuses: QuickStatus[]) => {
    ingredientItems.forEach((ingredientItem) => {
        for (let quickStatus of quickStatuses) {
            if (ingredientItem.apiName === quickStatus.productId) {
                ingredientItem.buyOrderPrice = quickStatus.sellPrice;
                ingredientItem.instaBuyPrice = quickStatus.buyPrice;
                break;
            }
        }
    })
    return ingredientItems;
}

export const fillBazaarItemPrices = (forgeItems: ForgeItem[], quickStatuses: QuickStatus[]) => {
    forgeItems.forEach((forgeItem) => {
        for (let quickStatus of quickStatuses) {
            if (forgeItem.apiName === quickStatus.productId) {
                forgeItem.sellOfferPrice = quickStatus.buyPrice
                forgeItem.instaSellPrice = quickStatus.sellPrice
                break;
            }
        }
    })
    return forgeItems;
}

export const fillProfitAndIngredientPrices = (forgeItems: ForgeItem[], filters: Filters) => {
    let result = forgeItems;
    result.forEach((forgeItem) => {
        forgeItem.ingredientsPrice = calculateIngredientPrice(forgeItem, filters)
        forgeItem.profit = calculateProfit(forgeItem, filters)
    })
    return result;
}

const calculateIngredientPrice = (forgeItem: ForgeItem, filters: Filters) => {
    let price = 0;
    for (let ingredient of forgeItem.ingredients) {
        if (filters.buyFrom === "Buy Order") {
            if (ingredient.item.buyOrderPrice === null) {
                return null;
            }
            price += ingredient.quantity * ingredient.item.buyOrderPrice
        } else {
            if (ingredient.item.instaBuyPrice === null) {
                return null;
            }
            price += ingredient.quantity * ingredient.item.instaBuyPrice
        }
    }
    return price;
}

const calculateProfit = (forgeItem: ForgeItem, filters: Filters) => {
    let price = 0;
    const ingredientPrice = calculateIngredientPrice(forgeItem, filters);
    const quickForgeMultiplier = filters.quickForge ? 0.7 : 1;
    const coleQuickForgeMultiplier = filters.coleQuickForge ? 0.75 : 1;
    const timeDivider = filters.sortBy === "Profit Per Forge" ? 1 : (forgeItem.secondsToForge / 3600) * quickForgeMultiplier * coleQuickForgeMultiplier

    if (ingredientPrice === null) {
        return null;
    }

    if (filters.sellTo === "Insta Sell") {
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
}