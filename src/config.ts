import { NavState } from './navigationBar/NavState';

export const pathToNavMap: Record<string, NavState> = {
    "/": NavState.COMMUNITY,
    "/shopping": NavState.SHOPPING,
    "/life": NavState.LIFE,
    "/topics/recommend": NavState.RECOMMAND,
    "/topics/hashtag-channel": NavState.CHANNEL
};