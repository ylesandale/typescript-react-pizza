import * as types from "../constants";

const initialState: FilterState = {
  visiblePopup: false,
  filters: [
    { id: 0, name: "популярности", active: true },
    { id: 1, name: "цене", active: false },
    { id: 2, name: "алфавиту", active: false },
  ],
};

const filters = (
  state: FilterState = initialState,
  action: Actions
): FilterState => {
  switch (action.type) {
    case types.SET_FILTER:
      return {
        ...state,
        filters: state.filters
          .map((filter) =>
            filter.active === true ? { ...filter, active: false } : filter
          )
          .map((filter) =>
            filter.id === action.id ? { ...filter, active: true } : filter
          ),
      };

    case types.VISIBLE_POPUP:
      return { ...state, visiblePopup: !state.visiblePopup };

    default:
      return state;
  }
};

export default filters;
