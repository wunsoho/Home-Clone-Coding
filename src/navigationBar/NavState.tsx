export enum NavState {
    COMMUNITY = "community",
    SHOPPING = "shopping",
    LIFE = "life",
    RECOMMAND = "recommand",
    CHANNEL = "channel",
    CATEGORY = "category",
    BEST = "best",
    DWELLING = "dwelling",
    PART = "part",
    HOUSEWARMING = "housewarming",
    HOUSEPHOTO = "housephoto",
    THREED = "threeD",
    STORAGE = "storage",
    PET = "pet",
    BABYCARE = "babycare",
    HOMESTORANG = "homestorang",
    PLAN = "plan",
    COLLECTABLE = "collectable",
    CAMPING = "camping",
    HOBBY = "hobby",
    HOTPLACE = "hotplace",
    EVENT = "event"
  }

export const NavGroups = {
  COMMUNITY: [NavState.COMMUNITY, NavState.RECOMMAND, NavState.CHANNEL, NavState.HOUSEWARMING,
    NavState.HOUSEPHOTO, NavState.THREED, NavState.STORAGE, NavState.PET, NavState.BABYCARE, NavState.HOMESTORANG, NavState.PLAN,
    NavState.COLLECTABLE, NavState.CAMPING, NavState.HOBBY, NavState.HOTPLACE, NavState.EVENT
  ],
  SHOPPING: [NavState.SHOPPING, NavState.CATEGORY, NavState.BEST],
  LIFE: [NavState.LIFE, NavState.DWELLING, NavState.PART],
};