import * as types from "../constants";

export const setCategory = (id: number): CategoryAction => ({
  type: types.SET_CATEGORY,
  id,
});
