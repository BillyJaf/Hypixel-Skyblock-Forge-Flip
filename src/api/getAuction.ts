import { forgeAuctionIngredients } from '../ui/utils/ingredients';
import {
  auctionItemLBINs,
  forgeableAuctionItems,
} from '../ui/utils/itemGroups';
import {
  armourReforges,
  drillReforges,
  equipmentReforges,
} from '../ui/utils/reforges';
import type { AuctionResponse, Auction } from './types';

export async function fetchAuctionLBINS() {
  const response = await fetch('https://api.hypixel.net/v2/skyblock/auctions', {
    method: 'Get',
  });

  const data = await response.json();
  const parsedData = data as AuctionResponse;

  const LBINs = auctionItemLBINs;

  if (!parsedData.success) {
    return { ...LBINs };
  }

  for (let page = 0; page < parsedData.totalPages; page++) {
    const response = await fetch(
      `https://api.hypixel.net/v2/skyblock/auctions?page=${page}`,
      {
        method: 'Get',
      }
    );

    const data = await response.json();
    const parsedData = data as AuctionResponse;

    if (parsedData.success) {
      parsedData.auctions.forEach((auction: Auction) => {
        if (auction.bin) {
          // Reforges Change Item Names:
          let displayName = auction.item_name;
          if (isReforged(auction.item_name)) {
            displayName = auction.item_name.split(' ').slice(1).join(' ');
          }
          if (isPet(auction.item_name)) {
            displayName = auction.item_name.split(' ')[2] + ' Pet';
          }

          if (
            forgeableAuctionItems.includes(displayName) ||
            forgeAuctionIngredients.includes(displayName)
          ) {
            if (LBINs[displayName] === null) {
              LBINs[displayName] = auction.starting_bid;
            } else if (LBINs[displayName]! > auction.starting_bid) {
              LBINs[displayName] = auction.starting_bid;
            }
          }
        }
      });
    }
  }
  return { ...LBINs };
}

const isReforged = (item_name: string) => {
  if (
    item_name.includes('Helmet') ||
    item_name.includes('Chestplate') ||
    item_name.includes('Leggings') ||
    item_name.includes('Boots')
  ) {
    return armourReforges.includes(item_name.split(' ')[0]);
  } else if (item_name.includes('Drill') || item_name.includes('Pickaxe')) {
    return drillReforges.includes(item_name.split(' ')[0]);
  } else if (
    item_name.includes('Belt') ||
    item_name.includes('Cloak') ||
    item_name.includes('Gauntlet') ||
    item_name.includes('Necklace') ||
    item_name.includes('Pendant')
  ) {
    return equipmentReforges.includes(item_name.split(' ')[0]);
  }
  return false;
};

const isPet = (item_name: string) => {
  return item_name.slice(0, 5) === '[Lvl ';
};
