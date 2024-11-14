import { NavState } from './navigationBar/NavState';

export const pathToNavMap: Record<string, NavState> = {
    "/": NavState.COMMUNITY,
    "/shopping": NavState.SHOPPING,
    "/life": NavState.LIFE,
    "/topics/recommend": NavState.RECOMMAND,
    "/topics/hashtag-channel": NavState.CHANNEL,
    "/category": NavState.CATEGORY,
    "/best": NavState.BEST,
    "/dwelling": NavState.DWELLING,
    "/part": NavState.PART,
    "/housewarming": NavState.HOUSEWARMING,
    "/housephoto": NavState.HOUSEPHOTO,
    "/threeD": NavState.THREED,
    "/storage": NavState.STORAGE,
    "/pet": NavState.PET,
    "/babycare": NavState.BABYCARE,
    "/homestorang": NavState.HOMESTORANG,
    "/plan": NavState.PLAN,
    "/collectable": NavState.COLLECTABLE,
    "/camping": NavState.CAMPING,
    "/hobby": NavState.HOBBY,
    "/hotplace": NavState.HOTPLACE,
    "/event": NavState.EVENT
}