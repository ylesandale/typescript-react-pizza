import * as types from "../constants";
const initialState: CartState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state: CartState = initialState, action: Actions): CartState => {
  switch (action.type) {
    case types.ADD_PIZZA_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allPizzas: any[] = [].concat.apply([], Object.values(newItems));

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0),
      };
    }

    case types.MINUS_CART_ITEM: {
      const oldItems = state.items[action.id];
      const newObjItems =
        oldItems.length > 1 ? state.items[action.id].slice(1) : oldItems;

      const totalPrice =
        state.items[action.id].length > 1
          ? state.totalPrice - state.items[action.id][0].price
          : state.totalPrice;
      const totalCount =
        state.items[action.id].length > 1
          ? state.totalCount - 1
          : state.totalCount;

      return {
        ...state,
        items: { ...state.items, [action.id]: newObjItems },
        totalPrice,
        totalCount,
      };
    }

    case types.PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[action.id],
        state.items[action.id][0],
      ];

      const totalPrice = state.totalPrice + state.items[action.id][0].price;
      const totalCount = state.totalCount + 1;

      return {
        ...state,
        items: { ...state.items, [action.id]: newObjItems },
        totalPrice,
        totalCount,
      };
    }

    case types.REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.id].reduce(
        (sum: number, obj: CartItem) => obj.price + sum,
        0
      );
      const currentTotalCount = newItems[action.id].length;
      delete newItems[action.id];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case types.CLEAR_CART:
      return { ...initialState };

    default:
      return state;
  }
};

export default cart;
