export interface BazaarResponse {
    success: boolean;
    lastUpdated: number;
    products: {[product_id: string]: Product};
}

export interface Product {
    product_id: string
    quick_status: QuickStatus
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