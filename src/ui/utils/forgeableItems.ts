import type { ForgeItem } from '../types/forge';
import {
  ARTIFACT_OF_POWER_INGREDIENT,
  BEACON_I_INGREDIENT,
  BEACON_II_INGREDIENT,
  BEACON_III_INGREDIENT,
  BEACON_IV_INGREDIENT,
  BEJEWELED_HANDLE_INGREDIENT,
  BLUE_GOBLIN_EGG_INGREDIENT,
  CHISEL_INGREDIENT,
  CLAW_FOSSIL_INGREDIENT,
  CLUBBED_FOSSIL_INGREDIENT,
  COIN_INGREDIENT,
  CONTROL_SWITCH_INGREDIENT,
  CORLEONITE_INGREDIENT,
  DIVAN_FRAGMENT_INGREDIENT,
  DIVANS_ALLOY_IGNREDIENT,
  DRILL_MOTOR_INGREDIENT,
  ELECTRON_TRANSMITTER_INGREDIENT,
  ENCHANTED_COAL_BLOCK_INGREDIENT,
  ENCHANTED_COBBLESTONE_INGREDIENT,
  ENCHANTED_DIAMOND_BLOCK_INGREDIENT,
  ENCHANTED_GLACTIE_INGREDIENT,
  ENCHANTED_GOLD_BLOCK_INGREDIENT,
  ENCHANTED_GOLD_INGREDIENT,
  ENCHANTED_HARD_STONE_INGREDIENT,
  ENCHANTED_IRON_BLOCK_INGREDIENT,
  ENCHANTED_LAPIS_LAZULI_INGREDIENT,
  ENCHANTED_MITHRIL_INGREDIENT,
  ENCHANTED_REDSTONE_BLOCK_INGREDIENT,
  ENCHANTED_TITANIUM_INGREDIENT,
  ENCHANTED_TUNGSTEN_INGREDIENT,
  ENCHANTED_UMBER_INGREDIENT,
  FINE_AMBER_GEMSTONE_INGREDIENT,
  FINE_AMETHYST_GEMSTONE_INGREDIENT,
  FINE_AQUAMARINE_GEMSTONE_INGREDIENT,
  FINE_CITRINE_GEMSTONE_INGREDIENT,
  FINE_JADE_GEMSTONE_INGREDIENT,
  FINE_ONYX_GEMSTONE_INGREDIENT,
  FINE_PERIDOT_GEMSTONE_INGREDIENT,
  FINE_RUBY_GEMSTONE_INGREDIENT,
  FINE_SAPPHIRE_GEMSTONE_INGREDIENT,
  FINE_TOPAZ_GEMSTONE_INGREDIENT,
  FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
  FLAWLESS_AMETHYST_GEMSTONE_INGREDIENT,
  FLAWLESS_AQUAMARINE_GEMSTONE_INGREDIENT,
  FLAWLESS_CITRINE_GEMSTONE_INGREDIENT,
  FLAWLESS_JADE_GEMSTONE_INGREDIENT,
  FLAWLESS_JASPER_GEMSTONE_INGREDIENT,
  FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
  FLAWLESS_OPAL_GEMSTONE_INGREDIENT,
  FLAWLESS_PERIDOT_GEMSTONE_INGREDIENT,
  FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
  FLAWLESS_SAPPHIRE_GEMSTONE_INGREDIENT,
  FLAWLESS_TOPAZ_GEMSTONE_INGREDIENT,
  FOOTPRINT_FOSSIL_INGREDIENT,
  FTX_3070_INGREDIENT,
  FUEL_CANISTER_INGREDIENT,
  GEMSTONE_DRILL_LT522_INGREDIENT,
  GEMSTONE_FUEL_TANK_INGREDIENT,
  GEMSTONE_MIXTURE_INGREDIENT,
  GLACITE_AMALGAMATION_INGREDIENT,
  GLACITE_JEWEL_INGREDIENT,
  GLACITE_PLATED_CHISEL_INGREDIENT,
  GLOSSY_GEMSTONE_INGREDIENT,
  GOBLIN_EGG_INGREDIENT,
  GOLDEN_PLATE_INGREDIENT,
  GREEN_GOBLIN_EGG_INGREDIENT,
  HELIX_FOSSIL_INGREDIENT,
  MAGMA_CORE_INGREDIENT,
  MATCH_STICKS_INGREDIENT,
  MITHRIL_BELT_INGREDIENT,
  MITHRIL_CLOAK_INGREDIENT,
  MITHRIL_DRILL_SXR226_INGREDIENT,
  MITHRIL_GAUNTLET_INGREDIENT,
  MITHRIL_INFUSED_FUEL_TANK_INGREDIENT,
  MITHRIL_NECKLACE_INGREDIENT,
  MITHRIL_PLATE_INGREDIENT,
  MITHRIL_PLATED_DRILL_ENGINE_INGREDIENT,
  PERFECT_OPAL_GEMSTONE_INGREDIENT,
  PERFECT_PLATE_INGREDIENT,
  PERFECT_SAPPHIRE_GEMSTONE_INGREDIENT,
  PLASMA_INGREDIENT,
  RED_GOBLIN_EGG_INGREDIENT,
  REFINED_DIAMOND_INGREDIENT,
  REFINED_MINERAL_INGREDIENT,
  REFINED_MITHRIL_INGREDIENT,
  REFINED_TITANIUM_INGREDIENT,
  REFINED_TUNGSTEN_INGREDIENT,
  REFINED_UMBER_INGREDIENT,
  REINFORCED_CHISEL_INGREDIENT,
  ROBOTRON_REFLECTOR_INGREDIENT,
  RUBY_DRILL_TX15_INGREDIENT,
  RUBY_POLISHED_DRILL_ENGINE,
  SAPPHIRE_POLISHED_DRILL_ENGINE_INGREDIENTS,
  SHATTERED_LOCKET_INGREDIENT,
  SLUDGE_JUICE_INGREDIENT,
  SPINE_FOSSIL_INGREDIENT,
  STARFALL_INGREDIENT,
  SUPERLITE_MOTOR_INGREDIENT,
  SYNTHETIC_HEART_INGREDIENT,
  TITANIUM_ARTIFACT_INGREDIENT,
  TITANIUM_DRILL_DRX355_INGREDIENT,
  TITANIUM_DRILL_DRX455_INGREDIENT,
  TITANIUM_DRILL_DRX555_INGREDIENT,
  TITANIUM_DRILL_DRX655_INGREDIENT,
  TITANIUM_INFUSED_FUEL_TANK_INGREDIENT,
  TITANIUM_PLATED_DRILL_ENGINE_INGREDIENT,
  TITANIUM_RING_INGREDIENT,
  TITANIUM_TALISMAN_INGREDIENT,
  TOPAZ_DRILL_KGR12_INGREDIENT,
  TREASURITE_INGREDIENT,
  TUNGSTEN_INGREDIENT,
  TUNGSTEN_PLATE_INGREDIENT,
  TUSK_FOSSIL_INGREDIENT,
  UGLY_FOSSIL_INGREDIENT,
  UMBER_PLATE_INGREDIENT,
  WEBBED_FOSSIL_INGREDIENT,
  WORM_MEMBRANE_INGREDIENT,
  YELLOW_GOBLIN_EGG_INGREDIENT,
} from './ingredients';

const refinedDiamond: ForgeItem = {
  displayName: 'Refined Diamond',
  imageName: 'Refined_Diamond',
  apiName: 'REFINED_DIAMOND',
  whereToSell: 'bazaar',
  secondsToForge: 28800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 2,
      item: ENCHANTED_DIAMOND_BLOCK_INGREDIENT,
    },
  ],
};

const refinedMithril: ForgeItem = {
  displayName: 'Refined Mithril',
  imageName: 'Refined_Mithril',
  apiName: 'REFINED_MITHRIL',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 160,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const refinedTitanium: ForgeItem = {
  displayName: 'Refined Titanium',
  imageName: 'Refined_Titanium',
  apiName: 'REFINED_TITANIUM',
  whereToSell: 'bazaar',
  secondsToForge: 43200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 16,
      item: ENCHANTED_TITANIUM_INGREDIENT,
    },
  ],
};

const refinedTungsten: ForgeItem = {
  displayName: 'Refined Tungsten',
  imageName: 'Refined_Tungsten',
  apiName: 'REFINED_TUNGSTEN',
  whereToSell: 'bazaar',
  secondsToForge: 3600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 160,
      item: ENCHANTED_TUNGSTEN_INGREDIENT,
    },
  ],
};

const refinedUmber: ForgeItem = {
  displayName: 'Refined Umber',
  imageName: 'Refined_Umber',
  apiName: 'REFINED_UMBER',
  whereToSell: 'bazaar',
  secondsToForge: 3600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 160,
      item: ENCHANTED_UMBER_INGREDIENT,
    },
  ],
};

const fuelCanister: ForgeItem = {
  displayName: 'Fuel Canister',
  imageName: 'Fuel_Canister',
  apiName: 'FUEL_TANK',
  whereToSell: 'bazaar',
  secondsToForge: 36000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 2,
      item: ENCHANTED_COAL_BLOCK_INGREDIENT,
    },
  ],
};

const bejeweledHandle: ForgeItem = {
  displayName: 'Bejeweled Handle',
  imageName: 'Enchanted_Stick',
  apiName: 'BEJEWELED_HANDLE',
  whereToSell: 'bazaar',
  secondsToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 3,
      item: GLACITE_JEWEL_INGREDIENT,
    },
  ],
};

const drillMotor: ForgeItem = {
  displayName: 'Drill Motor',
  imageName: 'Drill_Motor',
  apiName: 'DRILL_ENGINE',
  whereToSell: 'bazaar',
  secondsToForge: 108000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: ENCHANTED_IRON_BLOCK_INGREDIENT,
    },
    {
      quantity: 3,
      item: ENCHANTED_REDSTONE_BLOCK_INGREDIENT,
    },
    {
      quantity: 1,
      item: GOLDEN_PLATE_INGREDIENT,
    },
    {
      quantity: 10,
      item: TREASURITE_INGREDIENT,
    },
  ],
};

const goldenPlate: ForgeItem = {
  displayName: 'Golden Plate',
  imageName: 'Golden_Plate',
  apiName: 'GOLDEN_PLATE',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 2,
      item: ENCHANTED_GOLD_BLOCK_INGREDIENT,
    },
    {
      quantity: 5,
      item: GLACITE_JEWEL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_DIAMOND_INGREDIENT,
    },
  ],
};

const mithrilPlate: ForgeItem = {
  displayName: 'Mithril Plate',
  imageName: 'Mithril_Plate',
  apiName: 'MITHRIL_PLATE',
  whereToSell: 'bazaar',
  secondsToForge: 64800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: GOLDEN_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: ENCHANTED_IRON_BLOCK_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
  ],
};

const tungstenPlate: ForgeItem = {
  displayName: 'Tungsten Plate',
  imageName: 'Tungsten_Plate',
  apiName: 'TUNGSTEN_PLATE',
  whereToSell: 'bazaar',
  secondsToForge: 10800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 4,
      item: REFINED_TUNGSTEN_INGREDIENT,
    },
    {
      quantity: 1,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
  ],
};

const umberPlate: ForgeItem = {
  displayName: 'Umber Plate',
  imageName: 'Umber_Plate',
  apiName: 'UMBER_PLATE',
  whereToSell: 'bazaar',
  secondsToForge: 10800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 4,
      item: REFINED_UMBER_INGREDIENT,
    },
    {
      quantity: 1,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
  ],
};

const gemstoneMixture: ForgeItem = {
  displayName: 'Gemstone Mixture',
  imageName: 'Gemstone_Mixture',
  apiName: 'GEMSTONE_MIXTURE',
  whereToSell: 'bazaar',
  secondsToForge: 14400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 4,
      item: FINE_JADE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_AMBER_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_AMETHYST_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 320,
      item: SLUDGE_JUICE_INGREDIENT,
    },
  ],
};

const galciteAmalgamation: ForgeItem = {
  displayName: 'Glacite Amalgamation',
  imageName: 'Glacite_Amalgamation',
  apiName: 'GLACITE_AMALGAMATION',
  whereToSell: 'bazaar',
  secondsToForge: 14400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 4,
      item: FINE_ONYX_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_AQUAMARINE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_CITRINE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_PERIDOT_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 256,
      item: ENCHANTED_GLACTIE_INGREDIENT,
    },
  ],
};

const perfectJasperGemstone: ForgeItem = {
  displayName: 'Perfect Jasper Gemstone',
  imageName: 'Perfect_Jasper_Gemstone',
  apiName: 'PERFECT_JASPER_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_JASPER_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectRubyGemstone: ForgeItem = {
  displayName: 'Perfect Ruby Gemstone',
  imageName: 'Perfect_Ruby_Gemstone',
  apiName: 'PERFECT_RUBY_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectJadeGemstone: ForgeItem = {
  displayName: 'Perfect Jade Gemstone',
  imageName: 'Perfect_Jade_Gemstone',
  apiName: 'PERFECT_JADE_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_JADE_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectSapphireGemstone: ForgeItem = {
  displayName: 'Perfect Sapphire Gemstone',
  imageName: 'Perfect_Sapphire_Gemstone',
  apiName: 'PERFECT_SAPPHIRE_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectAmberGemstone: ForgeItem = {
  displayName: 'Perfect Amber Gemstone',
  imageName: 'Perfect_Amber_Gemstone',
  apiName: 'PERFECT_AMBER_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectTopazGemstone: ForgeItem = {
  displayName: 'Perfect Topaz Gemstone',
  imageName: 'Perfect_Topaz_Gemstone',
  apiName: 'PERFECT_TOPAZ_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_TOPAZ_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectAmethystGemstone: ForgeItem = {
  displayName: 'Perfect Amethyst Gemstone',
  imageName: 'Perfect_Amethyst_Gemstone',
  apiName: 'PERFECT_AMETHYST_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_AMETHYST_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectOpalGemstone: ForgeItem = {
  displayName: 'Perfect Opal Gemstone',
  imageName: 'Perfect_Opal_Gemstone',
  apiName: 'PERFECT_OPAL_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_OPAL_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectOnyxGemstone: ForgeItem = {
  displayName: 'Perfect Onyx Gemstone',
  imageName: 'Perfect_Onyx_Gemstone',
  apiName: 'PERFECT_ONYX_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectCitrineGemstone: ForgeItem = {
  displayName: 'Perfect Citrine Gemstone',
  imageName: 'Perfect_Citrine_Gemstone',
  apiName: 'PERFECT_CITRINE_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_CITRINE_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectAquamarineGemstone: ForgeItem = {
  displayName: 'Perfect Aquamarine Gemstone',
  imageName: 'Perfect_Aquamarine_Gemstone',
  apiName: 'PERFECT_AQUAMARINE_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_AQUAMARINE_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectPeridotGemstone: ForgeItem = {
  displayName: 'Perfect Peridot Gemstone',
  imageName: 'Perfect_Peridot_Gemstone',
  apiName: 'PERFECT_PERIDOT_GEM',
  whereToSell: 'bazaar',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_PERIDOT_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectPlate: ForgeItem = {
  displayName: 'Perfect Plate',
  imageName: 'Perfect_Plate',
  apiName: 'PERFECT_PLATE',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: UMBER_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: TUNGSTEN_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_PLATE_INGREDIENT,
    },
  ],
};

const mithrilPickaxe: ForgeItem = {
  displayName: 'Mithril Pickaxe',
  imageName: 'Enchanted_Diamond_Pickaxe',
  apiName: 'Mithril Pickaxe',
  whereToSell: 'auction',
  secondsToForge: 2700,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 64,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 10,
      item: ENCHANTED_GOLD_INGREDIENT,
    },
  ],
};

const beaconII: ForgeItem = {
  displayName: 'Beacon II',
  imageName: 'Enchanted_Beacon',
  apiName: 'Beacon II',
  whereToSell: 'auction',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: BEACON_I_INGREDIENT,
    },
    {
      quantity: 5,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const titaniumTalisman: ForgeItem = {
  displayName: 'Titanium Talisman',
  imageName: 'Titanium_Talisman',
  apiName: 'Titanium Talisman',
  whereToSell: 'auction',
  secondsToForge: 50400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 2,
      item: REFINED_TITANIUM_INGREDIENT,
    },
  ],
};

const diamonite: ForgeItem = {
  displayName: 'Diamonite',
  imageName: 'Diamonite',
  apiName: 'DIAMONITE',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 3,
      item: REFINED_DIAMOND_INGREDIENT,
    },
  ],
};

const pocketIceberg: ForgeItem = {
  displayName: 'Pocket Iceberg',
  imageName: 'Pocket_Iceberg',
  apiName: 'POCKET_ICEBERG',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: GLACITE_JEWEL_INGREDIENT,
    },
  ],
};

const powerCrystal: ForgeItem = {
  displayName: 'Power Crystal',
  imageName: 'Enchanted_Nether_Star',
  apiName: 'POWER_CRYSTAL',
  whereToSell: 'bazaar',
  secondsToForge: 7200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 256,
      item: STARFALL_INGREDIENT,
    },
  ],
};

const bejeweledCollar: ForgeItem = {
  displayName: 'Bejeweled Collar',
  imageName: 'Bejeweled_Collar',
  apiName: 'Bejeweled Collar',
  whereToSell: 'auction',
  secondsToForge: 7200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 4,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const mithrilGauntlet: ForgeItem = {
  displayName: 'Mithril Gauntlet',
  imageName: 'Mithril_Gauntlet',
  apiName: 'Mithril Gauntlet',
  whereToSell: 'auction',
  secondsToForge: 3600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 3,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const mithrilBelt: ForgeItem = {
  displayName: 'Mithril Belt',
  imageName: 'Mithril_Belt',
  apiName: 'Mithril Belt',
  whereToSell: 'auction',
  secondsToForge: 3600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 3,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const mithrilCloak: ForgeItem = {
  displayName: 'Mithril Cloak',
  imageName: 'Mithril_Cloak',
  apiName: 'Mithril Cloak',
  whereToSell: 'auction',
  secondsToForge: 3600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 3,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const mithrilNecklace: ForgeItem = {
  displayName: 'Mithril Necklace',
  imageName: 'Mithril_Necklace',
  apiName: 'Mithril Necklace',
  whereToSell: 'auction',
  secondsToForge: 3600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 3,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const chisel: ForgeItem = {
  displayName: 'Chisel',
  imageName: 'Armor_Stand',
  apiName: 'Chisel',
  whereToSell: 'auction',
  secondsToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 64,
      item: TUNGSTEN_INGREDIENT,
    },
  ],
};

const tungstenKey: ForgeItem = {
  displayName: 'Tungsten Key',
  imageName: 'Enchanted_Lever',
  apiName: 'TUNGSTEN_KEY',
  whereToSell: 'bazaar',
  secondsToForge: 1800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 192,
      item: ENCHANTED_TUNGSTEN_INGREDIENT,
    },
  ],
};

const umberKey: ForgeItem = {
  displayName: 'Umber Key',
  imageName: 'Enchanted_Dead_Bush',
  apiName: 'UMBER_KEY',
  whereToSell: 'bazaar',
  secondsToForge: 1800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 192,
      item: ENCHANTED_UMBER_INGREDIENT,
    },
  ],
};

const frigidHusk: ForgeItem = {
  displayName: 'Frigid Husk',
  imageName: 'Frigid_Husk',
  apiName: 'FRIGID_HUSK',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 4,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
    },
  ],
};

const refinedMithrilPickaxe: ForgeItem = {
  displayName: 'Refined Mithril Pickaxe',
  imageName: 'Enchanted_Diamond_Pickaxe',
  apiName: 'Refined Mithril Pickaxe',
  whereToSell: 'auction',
  secondsToForge: 79200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 3,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 2,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 30,
      item: ENCHANTED_GOLD_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_DIAMOND_INGREDIENT,
    },
  ],
};

const mithrilDrillSXR226: ForgeItem = {
  displayName: 'Mithril Drill SX-R226',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Mithril Drill SX-R226',
  whereToSell: 'auction',
  secondsToForge: 14400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: DRILL_MOTOR_INGREDIENT,
    },
    {
      quantity: 3,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FUEL_CANISTER_INGREDIENT,
    },
  ],
};

const mithrilInfusedFuelTank: ForgeItem = {
  displayName: 'Mithril-Infused Fuel Tank',
  imageName: 'Mithril-Infused_Fuel_Tank',
  apiName: 'Mithril-Infused Fuel Tank',
  whereToSell: 'auction',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 5,
      item: FUEL_CANISTER_INGREDIENT,
    },
  ],
};

const mithrilPlatedFuelDrillEngine: ForgeItem = {
  displayName: 'Mithril-Plated Drill Engine',
  imageName: 'Mithril-Plated_Drill_Engine',
  apiName: 'Mithril-Plated Drill Engine',
  whereToSell: 'auction',
  secondsToForge: 54000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 3,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 2,
      item: FUEL_CANISTER_INGREDIENT,
    },
  ],
};

const beaconIII: ForgeItem = {
  displayName: 'Beacon III',
  imageName: 'Enchanted_Beacon',
  apiName: 'Beacon III',
  whereToSell: 'auction',
  secondsToForge: 108000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: BEACON_II_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const titaniumRing: ForgeItem = {
  displayName: 'Titanium Ring',
  imageName: 'Titanium_Ring',
  apiName: 'Titanium Ring',
  whereToSell: 'auction',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 6,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: TITANIUM_TALISMAN_INGREDIENT,
    },
  ],
};

const pureMithril: ForgeItem = {
  displayName: 'Pure Mithril',
  imageName: 'Pure_Mithril',
  apiName: 'PURE_MITHRIL',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 2,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const titaniumTesseract: ForgeItem = {
  displayName: 'Titanium Tesseract',
  imageName: 'Titanium_Tesseract',
  apiName: 'TITANIUM_TESSERACT',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 16,
      item: ENCHANTED_LAPIS_LAZULI_INGREDIENT,
    },
  ],
};

const dwarvenGeode: ForgeItem = {
  displayName: 'Dwarven Geode',
  imageName: 'Dwarven_Geode',
  apiName: 'ROCK_GEMSTONE',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 128,
      item: ENCHANTED_COBBLESTONE_INGREDIENT,
    },
    {
      quantity: 64,
      item: TREASURITE_INGREDIENT,
    },
  ],
};

const petrifiedStarfall: ForgeItem = {
  displayName: 'Petrified Starfall',
  imageName: 'Petrified_Starfall',
  apiName: 'PETRIFIED_STARFALL',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 512,
      item: STARFALL_INGREDIENT,
    },
  ],
};

const pestoGoblinOmelette: ForgeItem = {
  displayName: 'Pesto Goblin Omelette',
  imageName: 'Pesto_Goblin_Omelette',
  apiName: 'Pesto Goblin Omelette',
  whereToSell: 'auction',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 99,
      item: GREEN_GOBLIN_EGG_INGREDIENT,
    },
    {
      quantity: 1,
      item: FINE_JADE_GEMSTONE_INGREDIENT,
    },
  ],
};

const ammonite: ForgeItem = {
  displayName: 'Ammonite Pet',
  imageName: 'Ammonite_Pet',
  apiName: '[Lvl 1] Ammonite',
  whereToSell: 'auction',
  secondsToForge: 259200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: HELIX_FOSSIL_INGREDIENT,
    },
    {
      quantity: 300000,
      item: COIN_INGREDIENT,
    },
  ],
};

const rubyDrillTX15: ForgeItem = {
  displayName: 'Ruby Drill TX-15',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Ruby Drill TX-15',
  whereToSell: 'auction',
  secondsToForge: 3600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: DRILL_MOTOR_INGREDIENT,
    },
    {
      quantity: 1,
      item: FUEL_CANISTER_INGREDIENT,
    },
    {
      quantity: 6,
      item: FINE_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const titaniumGauntlet: ForgeItem = {
  displayName: 'Titanium Gauntlet',
  imageName: 'Titanium_Gauntlet',
  apiName: 'Titanium Gauntlet',
  whereToSell: 'auction',
  secondsToForge: 16200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 16,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_GAUNTLET_INGREDIENT,
    },
  ],
};

const titaniumBelt: ForgeItem = {
  displayName: 'Titanium Belt',
  imageName: 'Titanium_Belt',
  apiName: 'Titanium Belt',
  whereToSell: 'auction',
  secondsToForge: 16200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 16,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_BELT_INGREDIENT,
    },
  ],
};

const titaniumCloak: ForgeItem = {
  displayName: 'Titanium Cloak',
  imageName: 'Titanium_Cloak',
  apiName: 'Titanium Cloak',
  whereToSell: 'auction',
  secondsToForge: 16200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 16,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_CLOAK_INGREDIENT,
    },
  ],
};

const titaniumNecklace: ForgeItem = {
  displayName: 'Titanium Necklace',
  imageName: 'Titanium_Necklace',
  apiName: 'Titanium Necklace',
  whereToSell: 'auction',
  secondsToForge: 16200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 16,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_NECKLACE_INGREDIENT,
    },
  ],
};

const mole: ForgeItem = {
  displayName: 'Mole Pet',
  imageName: 'Mole_Pet',
  apiName: '[Lvl 1] Mole',
  whereToSell: 'auction',
  secondsToForge: 259200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: CLAW_FOSSIL_INGREDIENT,
    },
    {
      quantity: 300000,
      item: COIN_INGREDIENT,
    },
  ],
};

const mithrilDrillSXR326: ForgeItem = {
  displayName: 'Mithril Drill SX-R326',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Mithril Drill SX-R326',
  whereToSell: 'auction',
  secondsToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: MITHRIL_DRILL_SXR226_INGREDIENT,
    },
    {
      quantity: 5,
      item: GOLDEN_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_PLATE_INGREDIENT,
    },
  ],
};

const titaniumPlatedDrillEngine: ForgeItem = {
  displayName: 'Titanium-Plated Drill Engine',
  imageName: 'Titanium-Plated_Drill_Engine',
  apiName: 'Titanium-Plated Drill Engine',
  whereToSell: 'auction',
  secondsToForge: 108000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 10,
      item: DRILL_MOTOR_INGREDIENT,
    },
    {
      quantity: 5,
      item: PLASMA_INGREDIENT,
    },
    {
      quantity: 4,
      item: MITHRIL_PLATE_INGREDIENT,
    },
    {
      quantity: 5,
      item: REFINED_TITANIUM_INGREDIENT,
    },
  ],
};

const goblinOmelette: ForgeItem = {
  displayName: 'Goblin Omelette',
  imageName: 'Goblin_Omelette',
  apiName: 'Goblin Omelette',
  whereToSell: 'auction',
  secondsToForge: 64800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 99,
      item: GOBLIN_EGG_INGREDIENT,
    },
  ],
};

const beaconIV: ForgeItem = {
  displayName: 'Beacon IV',
  imageName: 'Enchanted_Beacon',
  apiName: 'Beacon IV',
  whereToSell: 'auction',
  secondsToForge: 144000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: BEACON_III_INGREDIENT,
    },
    {
      quantity: 20,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: PLASMA_INGREDIENT,
    },
  ],
};

const titaniumArtifact: ForgeItem = {
  displayName: 'Titanium Artifact',
  imageName: 'Titanium_Artifact',
  apiName: 'Titanium Artifact',
  whereToSell: 'auction',
  secondsToForge: 129600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 12,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: TITANIUM_RING_INGREDIENT,
    },
  ],
};

const scorchedTopaz: ForgeItem = {
  displayName: 'Scorched Topaz',
  imageName: 'Scorched_Topaz',
  apiName: 'HOT_STUFF',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 128,
      item: ENCHANTED_HARD_STONE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_TOPAZ_GEMSTONE_INGREDIENT,
    },
  ],
};

const sunnySideGoblinOmelette: ForgeItem = {
  displayName: 'Sunny Side Goblin Omelette',
  imageName: 'Sunny_Side_Goblin_Omelette',
  apiName: 'Sunny Side Goblin Omelette',
  whereToSell: 'auction',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 99,
      item: YELLOW_GOBLIN_EGG_INGREDIENT,
    },
    {
      quantity: 1,
      item: FINE_TOPAZ_GEMSTONE_INGREDIENT,
    },
  ],
};

const gemstoneDrillLT522: ForgeItem = {
  displayName: 'Gemstone Drill LT-522',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Gemstone Drill LT-522',
  whereToSell: 'auction',
  secondsToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: RUBY_DRILL_TX15_INGREDIENT,
    },
    {
      quantity: 3,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
  ],
};

const gleamingCrystal: ForgeItem = {
  displayName: 'Gleaming Crystal',
  imageName: 'Gleaming_Crystal',
  apiName: 'GLEAMING_CRYSTAL',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 32,
      item: RUBY_DRILL_TX15_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 2,
      item: REFINED_DIAMOND_INGREDIENT,
    },
  ],
};

const titaniumDrillDRX355: ForgeItem = {
  displayName: 'Titanium Drill DR-X355',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Titanium Drill DR-X355',
  whereToSell: 'auction',
  secondsToForge: 230400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: DRILL_MOTOR_INGREDIENT,
    },
    {
      quantity: 1,
      item: FUEL_CANISTER_INGREDIENT,
    },
    {
      quantity: 6,
      item: GOLDEN_PLATE_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const titaniumDrillDRX455: ForgeItem = {
  displayName: 'Titanium Drill DR-X455',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Titanium Drill DR-X455',
  whereToSell: 'auction',
  secondsToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_DRILL_DRX355_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 16,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 6,
      item: MITHRIL_PLATE_INGREDIENT,
    },
  ],
};

const titaniumDrillDRX555: ForgeItem = {
  displayName: 'Titanium Drill DR-X555',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Titanium Drill DR-X555',
  whereToSell: 'auction',
  secondsToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_DRILL_DRX455_INGREDIENT,
    },
    {
      quantity: 20,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 32,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 2,
      item: ENCHANTED_IRON_BLOCK_INGREDIENT,
    },
    {
      quantity: 15,
      item: MITHRIL_PLATE_INGREDIENT,
    },
    {
      quantity: 20,
      item: PLASMA_INGREDIENT,
    },
  ],
};

const titaniumInfusedFuelTank: ForgeItem = {
  displayName: 'Titanium-Infused Fuel Tank',
  imageName: 'Titanium-Infused_Fuel_Tank',
  apiName: 'Titanium-Infused Fuel Tank',
  whereToSell: 'auction',
  secondsToForge: 90000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: MITHRIL_INFUSED_FUEL_TANK_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 5,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 5,
      item: FUEL_CANISTER_INGREDIENT,
    },
  ],
};

const beaconV: ForgeItem = {
  displayName: 'Beacon V',
  imageName: 'Enchanted_Beacon',
  apiName: 'Beacon V',
  whereToSell: 'auction',
  secondsToForge: 180000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: BEACON_IV_INGREDIENT,
    },
    {
      quantity: 40,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 5,
      item: PLASMA_INGREDIENT,
    },
  ],
};

const titaniumRelic: ForgeItem = {
  displayName: 'Titanium Relic',
  imageName: 'Titanium_Relic',
  apiName: 'Titanium Relic',
  whereToSell: 'auction',
  secondsToForge: 259200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_ARTIFACT_INGREDIENT,
    },
    {
      quantity: 20,
      item: REFINED_TITANIUM_INGREDIENT,
    },
  ],
};

const spicyGoblinOmelette: ForgeItem = {
  displayName: 'Spicy Goblin Omelette',
  imageName: 'Spicy_Goblin_Omelette',
  apiName: 'Spicy Goblin Omelette',
  whereToSell: 'auction',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 99,
      item: RED_GOBLIN_EGG_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const gemstoneChamber: ForgeItem = {
  displayName: 'Gemstone Chamber',
  imageName: 'Gemstone_Chamber',
  apiName: 'Gemstone Chamber',
  whereToSell: 'auction',
  secondsToForge: 14400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 100,
      item: WORM_MEMBRANE_INGREDIENT,
    },
    {
      quantity: 1,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 25000,
      item: COIN_INGREDIENT,
    },
  ],
};

const topazDrillKGR12: ForgeItem = {
  displayName: 'Topaz Drill KGR-12',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Topaz Drill KGR-12',
  whereToSell: 'auction',
  secondsToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: GEMSTONE_DRILL_LT522_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_TOPAZ_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 3,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 5,
      item: MAGMA_CORE_INGREDIENT,
    },
  ],
};

const rubyPolishedDrillEngine: ForgeItem = {
  displayName: 'Ruby-Polished Drill Engine',
  imageName: 'Ruby-Polished_Drill_Engine',
  apiName: 'Ruby-Polished Drill Engine',
  whereToSell: 'auction',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: MITHRIL_PLATED_DRILL_ENGINE_INGREDIENT,
    },
    {
      quantity: 10,
      item: SUPERLITE_MOTOR_INGREDIENT,
    },
    {
      quantity: 10,
      item: FINE_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const gemstoneFuelTank: ForgeItem = {
  displayName: 'Gemstone Fuel Tank',
  imageName: 'Gemstone_Fuel_Tank',
  apiName: 'Gemstone Fuel Tank',
  whereToSell: 'auction',
  secondsToForge: 108000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_INFUSED_FUEL_TANK_INGREDIENT,
    },
    {
      quantity: 30,
      item: CONTROL_SWITCH_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
  ],
};

const amethystGauntlet: ForgeItem = {
  displayName: 'Amethyst Gauntlet',
  imageName: 'Amethyst_Gauntlet',
  apiName: 'Amethyst Gauntlet',
  whereToSell: 'auction',
  secondsToForge: 86400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 2,
      item: FLAWLESS_AMETHYST_GEMSTONE_INGREDIENT,
    },
  ],
};

const jadeBelt: ForgeItem = {
  displayName: 'Jade Belt',
  imageName: 'Jade_Belt',
  apiName: 'Jade Belt',
  whereToSell: 'auction',
  secondsToForge: 86400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 2,
      item: FLAWLESS_JADE_GEMSTONE_INGREDIENT,
    },
  ],
};

const sapphireCloak: ForgeItem = {
  displayName: 'Sapphire Cloak',
  imageName: 'Sapphire_Cloak',
  apiName: 'Sapphire Cloak',
  whereToSell: 'auction',
  secondsToForge: 86400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 2,
      item: FLAWLESS_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
  ],
};

const amberNecklace: ForgeItem = {
  displayName: 'Amber Necklace',
  imageName: 'Amber_Necklace',
  apiName: 'Amber Necklace',
  whereToSell: 'auction',
  secondsToForge: 86400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 2,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
  ],
};

const blueCheeseGoblinOmelette: ForgeItem = {
  displayName: 'Blue Cheese Goblin Omelette',
  imageName: 'Blue_Cheese_Goblin_Omelette',
  apiName: 'Blue Cheese Goblin Omelette',
  whereToSell: 'auction',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 99,
      item: BLUE_GOBLIN_EGG_INGREDIENT,
    },
    {
      quantity: 1,
      item: PERFECT_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
  ],
};

const titaniumDrillDRX655: ForgeItem = {
  displayName: 'Titanium Drill DR-X655',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Titanium Drill DR-X655',
  whereToSell: 'auction',
  secondsToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_DRILL_DRX555_INGREDIENT,
    },
    {
      quantity: 30,
      item: CORLEONITE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 5,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 16,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 12,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 5,
      item: MITHRIL_PLATE_INGREDIENT,
    },
  ],
};

const jasperDillX: ForgeItem = {
  displayName: 'Jasper Drill X',
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: 'Jasper Drill X',
  whereToSell: 'auction',
  secondsToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: TOPAZ_DRILL_KGR12_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_JASPER_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 100,
      item: TREASURITE_INGREDIENT,
    },
  ],
};

const sapphirePolishedDrillEngine: ForgeItem = {
  displayName: 'Sapphire-Polished Drill Engine',
  imageName: 'Sapphire-Polished_Drill_Engine',
  apiName: 'Sapphire-Polished Drill Engine',
  whereToSell: 'auction',
  secondsToForge: 72000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_PLATED_DRILL_ENGINE_INGREDIENT,
    },
    {
      quantity: 25,
      item: ELECTRON_TRANSMITTER_INGREDIENT,
    },
    {
      quantity: 25,
      item: FTX_3070_INGREDIENT,
    },
    {
      quantity: 20,
      item: FINE_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
  ],
};

const amberMaterial: ForgeItem = {
  displayName: 'Amber Material',
  imageName: 'Amber_Material',
  apiName: 'AMBER_MATERIAL',
  whereToSell: 'bazaar',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 12,
      item: FINE_AMBER_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 1,
      item: GOLDEN_PLATE_INGREDIENT,
    },
  ],
};

const helmetOfDivan: ForgeItem = {
  displayName: 'Helmet of Divan',
  imageName: 'Helmet_Of_Divan',
  apiName: 'Helmet of Divan',
  whereToSell: 'auction',
  secondsToForge: 82800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 5,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const chestplateOfDivan: ForgeItem = {
  displayName: 'Chestplate of Divan',
  imageName: 'Golden_Chestplate',
  apiName: 'Chestplate of Divan',
  whereToSell: 'auction',
  secondsToForge: 82800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 8,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const leggingsOfDivan: ForgeItem = {
  displayName: 'Leggings of Divan',
  imageName: 'Golden_Leggings',
  apiName: 'Leggings of Divan',
  whereToSell: 'auction',
  secondsToForge: 82800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 7,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const bootsOfDivan: ForgeItem = {
  displayName: 'Boots of Divan',
  imageName: 'Golden_Boots',
  apiName: 'Boots of Divan',
  whereToSell: 'auction',
  secondsToForge: 82800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 4,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const amberPolishedDrillEngine: ForgeItem = {
  displayName: 'Amber-Polished Drill Engine',
  imageName: 'Amber-Polished_Drill_Engine',
  apiName: 'Amber-Polished Drill Engine',
  whereToSell: 'auction',
  secondsToForge: 180000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: RUBY_POLISHED_DRILL_ENGINE,
    },
    {
      quantity: 1,
      item: SAPPHIRE_POLISHED_DRILL_ENGINE_INGREDIENTS,
    },
    {
      quantity: 1,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 50,
      item: ROBOTRON_REFLECTOR_INGREDIENT,
    },
  ],
};

const perfectlyCutFuelTank: ForgeItem = {
  displayName: 'Perfectly-Cut Fuel Tank',
  imageName: 'Perfectly-Cut_Fuel_Tank',
  apiName: 'Perfectly-Cut Fuel Tank',
  whereToSell: 'auction',
  secondsToForge: 180000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: GEMSTONE_FUEL_TANK_INGREDIENT,
    },
    {
      quantity: 25,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 70,
      item: SYNTHETIC_HEART_INGREDIENT,
    },
  ],
};

const divansDrill: ForgeItem = {
  displayName: "Divan's Drill",
  imageName: 'Enchanted_Prismarine_Shard',
  apiName: "Divan's Drill",
  whereToSell: 'auction',
  secondsToForge: 216000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: DIVANS_ALLOY_IGNREDIENT,
    },
    {
      quantity: 1,
      item: TITANIUM_DRILL_DRX655_INGREDIENT,
    },
    {
      quantity: 50000000,
      item: COIN_INGREDIENT,
    },
  ],
};

const divansPowderCoating: ForgeItem = {
  displayName: "Divan's Powder Coating",
  imageName: 'Divans_Powder_Coating',
  apiName: 'DIVAN_POWDER_COATING',
  whereToSell: 'bazaar',
  secondsToForge: 129600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 32,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 5,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 16,
      item: ENCHANTED_GOLD_BLOCK_INGREDIENT,
    },
  ],
};

const trex: ForgeItem = {
  displayName: 'T-Rex Pet',
  imageName: 'T-Rex_Pet',
  apiName: '[Lvl 1] T-Rex',
  whereToSell: 'auction',
  secondsToForge: 604800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: FOOTPRINT_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
    },
  ],
};

const mammoth: ForgeItem = {
  displayName: 'Mammoth Pet',
  imageName: 'Mammoth_Pet',
  apiName: '[Lvl 1] Mammoth',
  whereToSell: 'auction',
  secondsToForge: 604800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: TUSK_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
    },
  ],
};

const spinosaurus: ForgeItem = {
  displayName: 'Spinosaurus Pet',
  imageName: 'Spinosaurus_Pet',
  apiName: '[Lvl 1] Spinosaurus',
  whereToSell: 'auction',
  secondsToForge: 604800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: SPINE_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_AQUAMARINE_GEMSTONE_INGREDIENT,
    },
  ],
};

const penguin: ForgeItem = {
  displayName: 'Penguin Pet',
  imageName: 'Penguin_Pet',
  apiName: '[Lvl 1] Penguin',
  whereToSell: 'auction',
  secondsToForge: 604800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: WEBBED_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_AQUAMARINE_GEMSTONE_INGREDIENT,
    },
  ],
};

const goblin: ForgeItem = {
  displayName: 'Goblin Pet',
  imageName: 'Goblin_Pet',
  apiName: '[Lvl 1] Goblin',
  whereToSell: 'auction',
  secondsToForge: 604800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: UGLY_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
  ],
};

const ankylosaurus: ForgeItem = {
  displayName: 'Ankylosaurus Pet',
  imageName: 'Ankylosaurus_Pet',
  apiName: '[Lvl 1] Ankylosaurus',
  whereToSell: 'auction',
  secondsToForge: 604800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: CLUBBED_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_OPAL_GEMSTONE_INGREDIENT,
    },
  ],
};

const dwarvenHandwarmers: ForgeItem = {
  displayName: 'Dwarven Handwarmers',
  imageName: 'Dwarven_Handwarmers',
  apiName: 'Dwarven Handwarmers',
  whereToSell: 'auction',
  secondsToForge: 14400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: UMBER_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: TUNGSTEN_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_JADE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
  ],
};

const reinforcedChisel: ForgeItem = {
  displayName: 'Reinforced Chisel',
  imageName: 'Armor_Stand',
  apiName: 'Reinforced Chisel',
  whereToSell: 'auction',
  secondsToForge: 43200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: CHISEL_INGREDIENT,
    },
    {
      quantity: 2,
      item: REFINED_TUNGSTEN_INGREDIENT,
    },
    {
      quantity: 2,
      item: REFINED_UMBER_INGREDIENT,
    },
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
  ],
};

const glacitePlatedChisel: ForgeItem = {
  displayName: 'Glacite-Plated Chisel',
  imageName: 'Armor_Stand',
  apiName: 'Glacite-Plated Chisel',
  whereToSell: 'auction',
  secondsToForge: 64800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: REINFORCED_CHISEL_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_PLATE_INGREDIENT,
    },
    {
      quantity: 8,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
  ],
};

const perfectChisel: ForgeItem = {
  displayName: 'Perfect Chisel',
  imageName: 'Enchanted_Armor_Stand',
  apiName: 'Perfect Chisel',
  whereToSell: 'auction',
  secondsToForge: 64800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: GLACITE_PLATED_CHISEL_INGREDIENT,
    },
    {
      quantity: 1,
      item: PERFECT_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
  ],
};

const dwarvenMetalTalisman: ForgeItem = {
  displayName: 'Dwarven Metal Talisman',
  imageName: 'Dwarven_Metal_Talisman',
  apiName: 'Dwarven Metal Talisman',
  whereToSell: 'auction',
  secondsToForge: 86400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 4,
      item: REFINED_UMBER_INGREDIENT,
    },
    {
      quantity: 4,
      item: REFINED_TUNGSTEN_INGREDIENT,
    },
    {
      quantity: 4,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
  ],
};

const portableCampfire: ForgeItem = {
  displayName: 'Portable Campfire',
  imageName: 'Furnace',
  apiName: 'Portable Campfire',
  whereToSell: 'auction',
  secondsToForge: 1800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: REFINED_UMBER_INGREDIENT,
    },
    {
      quantity: 16,
      item: MATCH_STICKS_INGREDIENT,
    },
  ],
};

const tungstenRegulator: ForgeItem = {
  displayName: 'Tungsten Regulator',
  imageName: 'Tungsten_Regulator',
  apiName: 'Tungsten Regulator',
  whereToSell: 'auction',
  secondsToForge: 21600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: PERFECT_OPAL_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 5,
      item: FUEL_CANISTER_INGREDIENT,
    },
    {
      quantity: 5,
      item: TUNGSTEN_PLATE_INGREDIENT,
    },
  ],
};

const pendantOfDivan: ForgeItem = {
  displayName: 'Pendant of Divan',
  imageName: 'Pendant_Of_Divan',
  apiName: 'Pendant of Divan',
  whereToSell: 'auction',
  secondsToForge: 604800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: SHATTERED_LOCKET_INGREDIENT,
    },
    {
      quantity: 1,
      item: PERFECT_PLATE_INGREDIENT,
    },
    {
      quantity: 10,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
  ],
};

const relicOfPower: ForgeItem = {
  displayName: 'Relic of Power',
  imageName: 'Relic_Of_Power',
  apiName: 'Relic of Power',
  whereToSell: 'auction',
  secondsToForge: 28800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: ARTIFACT_OF_POWER_INGREDIENT,
    },
    {
      quantity: 4,
      item: PERFECT_PLATE_INGREDIENT,
    },
  ],
};

const skeletonKey: ForgeItem = {
  displayName: 'Skeleton Key',
  imageName: 'Tripwire_Hook',
  apiName: 'SKELETON_KEY',
  whereToSell: 'bazaar',
  secondsToForge: 1800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profit: null,
  ingredientsPrice: null,
  dataIsFetched: false,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 1,
      item: PERFECT_PLATE_INGREDIENT,
    },
  ],
};

export const forgeableItems: ForgeItem[] = [
  refinedDiamond,
  refinedMithril,
  refinedTitanium,
  refinedTungsten,
  refinedUmber,
  fuelCanister,
  bejeweledHandle,
  drillMotor,
  goldenPlate,
  mithrilPlate,
  tungstenPlate,
  umberPlate,
  gemstoneMixture,
  galciteAmalgamation,
  perfectAmberGemstone,
  perfectAmethystGemstone,
  perfectAquamarineGemstone,
  perfectCitrineGemstone,
  perfectJadeGemstone,
  perfectJasperGemstone,
  perfectOnyxGemstone,
  perfectOpalGemstone,
  perfectPeridotGemstone,
  perfectRubyGemstone,
  perfectSapphireGemstone,
  perfectTopazGemstone,
  perfectPlate,
  mithrilPickaxe,
  beaconII,
  titaniumTalisman,
  diamonite,
  pocketIceberg,
  powerCrystal,
  bejeweledCollar,
  mithrilGauntlet,
  mithrilBelt,
  mithrilCloak,
  mithrilNecklace,
  chisel,
  tungstenKey,
  umberKey,
  frigidHusk,
  refinedMithrilPickaxe,
  mithrilDrillSXR226,
  mithrilInfusedFuelTank,
  mithrilPlatedFuelDrillEngine,
  beaconIII,
  titaniumRing,
  pureMithril,
  titaniumTesseract,
  dwarvenGeode,
  petrifiedStarfall,
  pestoGoblinOmelette,
  ammonite,
  rubyDrillTX15,
  titaniumGauntlet,
  titaniumBelt,
  titaniumCloak,
  titaniumNecklace,
  mole,
  mithrilDrillSXR326,
  titaniumPlatedDrillEngine,
  goblinOmelette,
  beaconIV,
  titaniumArtifact,
  scorchedTopaz,
  sunnySideGoblinOmelette,
  gemstoneDrillLT522,
  gleamingCrystal,
  titaniumDrillDRX355,
  titaniumDrillDRX455,
  titaniumDrillDRX555,
  titaniumInfusedFuelTank,
  beaconV,
  titaniumRelic,
  spicyGoblinOmelette,
  gemstoneChamber,
  topazDrillKGR12,
  rubyPolishedDrillEngine,
  gemstoneFuelTank,
  amethystGauntlet,
  jadeBelt,
  sapphireCloak,
  amberNecklace,
  blueCheeseGoblinOmelette,
  titaniumDrillDRX655,
  jasperDillX,
  sapphirePolishedDrillEngine,
  amberMaterial,
  helmetOfDivan,
  chestplateOfDivan,
  leggingsOfDivan,
  bootsOfDivan,
  amberPolishedDrillEngine,
  perfectlyCutFuelTank,
  divansDrill,
  divansPowderCoating,
  trex,
  mammoth,
  spinosaurus,
  penguin,
  goblin,
  ankylosaurus,
  dwarvenHandwarmers,
  reinforcedChisel,
  glacitePlatedChisel,
  perfectChisel,
  dwarvenMetalTalisman,
  portableCampfire,
  tungstenRegulator,
  pendantOfDivan,
  relicOfPower,
  skeletonKey,
];
