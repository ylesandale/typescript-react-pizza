import * as types from "../constants";

export const setFilter = (id: number): FilterAction => ({
  type: types.SET_FILTER,
  id,
});

export const setVisiblePopup = (): FilterPopupAction => ({
  type: types.VISIBLE_POPUP,
});
