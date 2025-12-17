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

export interface Auction {
  uuid: string;
  auctioneer: string;
  profile_id: string;
  coop: string[];
  start: number;
  end: number;
  item_name: string;
  item_lore: string;
  extra: string;
  category: string;
  tier: string;
  starting_bid: number;
  item_bytes: ItemBytes;
  claimed: boolean;
  claimed_bidders: string[];
  highest_bid_amount: number;
  bids: Bid[];
  bin: boolean;
}

interface ItemBytes {
    type: number;
    data: number[];
}

interface Bid {
    auction_id: string;
    bidder: string;
    profile_id: string;
    amount: number;
    timestamp: number;
}

export interface AuctionResponse {
  success: boolean;
  page: number;
  totalPages: number;
  totalAuctions: number;
  lastUpdated: number;
  auctions: Auction[];
}