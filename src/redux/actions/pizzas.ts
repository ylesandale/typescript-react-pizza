/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as types from "../constants";

export const setActiveType = (
  id: number,
  index: number
): SetActiveTypePizza => ({
  type: types.SET_ACTIVE_TYPE,
  id,
  index,
});

export const setActiveSize = (
  id: number,
  number: number
): SetActiveSizePizza => ({
  type: types.SET_ACTIVE_SIZE,
  id,
  number,
});

export const setSortByName = (): SetSortByName => ({
  type: types.SET_SORT_BY_NAME,
});

export const setSortByPrice = (): SetSortByPrice => ({
  type: types.SET_SORT_BY_PRICE,
});

export const setSortByRating = (): SetSortByRating => ({
  type: types.SET_SORT_BY_RATING,
});

export const setCategories = (id: number): SetCategory => ({
  type: types.SET_CATEGORIES,
  id,
});
