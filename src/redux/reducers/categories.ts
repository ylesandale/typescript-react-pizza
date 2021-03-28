import * as types from "../constants";

const initialState: CategoryState[] = [
  { id: 0, name: "Все", active: true },
  { id: 1, name: "Мясные", active: false },
  { id: 2, name: "Вегетарианская", active: false },
  { id: 3, name: "Гриль", active: false },
  { id: 4, name: "Острые", active: false },
  { id: 5, name: "Закрытые", active: false },
];

const categories = (
  state: CategoryState[] = initialState,
  action: Actions
): CategoryState[] => {
  switch (action.type) {
    case types.SET_CATEGORY:
      return state
        .map((category) =>
          category.active === true ? { ...category, active: false } : category
        )
        .map((category) =>
          category.id === action.id ? { ...category, active: true } : category
        );

    default:
      return state;
  }
};

export default categories;
