import type { BazaarResponse, QuickStatus } from "./types";

export async function fetchBazaarQuickStatus() {
  const response = await fetch(
      "https://api.hypixel.net/v2/skyblock/bazaar", {
      method: "Get",
  });

  const data = await response.json();
  const parsedData = data as BazaarResponse;

  return bazaarResponseToQuickStatus(parsedData);
}

const bazaarResponseToQuickStatus = (bazaarResponse: BazaarResponse) => {
    let quickStatus: QuickStatus[] = []
    if (bazaarResponse.success) {
        Object.entries(bazaarResponse.products).forEach(([_, product]) => {
            quickStatus.push(product.quick_status)
        })
    }
    return quickStatus
}