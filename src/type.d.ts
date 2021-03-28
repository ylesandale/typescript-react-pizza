type CategoryState = { id: number; name: string; active: boolean };
type CategoryAction = { type: "SET_CATEGORY"; id: number };
type CategorySelector = { categories: CategoryState[] };

type Filter = { id: number; name: string; active: boolean };
type FilterState = { visiblePopup: boolean; filters: Filter[] };
type FilterAction = { type: "SET_FILTER"; id: number };
type FilterPopupAction = { type: "VISIBLE_POPUP" };
type FilterSelector = { filters: { visiblePopup: boolean; filters: Filter[] } };

type type = {
  number: number;
  active: boolean;
};
type size = {
  number: number;
  active: boolean;
};

type Pizza = {
  id: number;
  imageUrl: string;
  name: string;
  types: type[];
  sizes: size[];
  price: number;
  category: number;
  rating: number;
};
type PizzaState = {
  pizzas: Pizza[];
  avaiableTypes: string[];
  avaiableSizes: number[];
};
type PizzaSelector = {
  pizzas: {
    pizzas: Pizza[];
    avaiableTypes: string[];
    avaiableSizes: number[];
  };
};

type SetActiveTypePizza = {
  type: "SET_ACTIVE_TYPE";
  id: number;
  index: number;
};

type SetActiveSizePizza = {
  type: "SET_ACTIVE_SIZE";
  id: number;
  number: number;
};

type SetSortByName = {
  type: "SET_SORT_BY_NAME";
};
type SetSortByPrice = {
  type: "SET_SORT_BY_PRICE";
};
type SetSortByRating = {
  type: "SET_SORT_BY_RATING";
};

type SetCategory = {
  type: "SET_CATEGORIES";
  id: number;
};

type CartItem = {
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  price: number;
};

type CartState = {
  items: any;
  totalPrice: number;
  totalCount: number;
};
type CartAddAction = {
  type: "ADD_PIZZA_CART";
  payload: CartItem;
};
type CartSelector = {
  cart: {
    items: any;
    totalPrice: number;
    totalCount: number;
  };
};

type MinusCartItem = {
  type: "MINUS_CART_ITEM";
  id: number;
};

type RemoveCartItem = {
  type: "REMOVE_CART_ITEM";
  id: number;
};

type PlusCartItem = {
  type: "PLUS_CART_ITEM";
  id: number;
};

type ClearCart = {
  type: "CLEAR_CART";
};

type Actions =
  | CategoryAction
  | FilterAction
  | inputValue
  | SetActiveTypePizza
  | SetActiveSizePizza
  | SetSortBy
  | SetSortByPrice
  | SetSortByRating
  | CartAddAction
  | SetCategory
  | MinusCartItem
  | PlusCartItem
  | ClearCart
  | RemoveCartItem;
