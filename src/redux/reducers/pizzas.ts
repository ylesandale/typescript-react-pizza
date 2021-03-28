import * as types from "../constants";

const initialState: PizzaState = {
  pizzas: [
    {
      id: 8,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
      name: "Четыре сезона",
      types: [
        { number: 0, active: true },
        { number: 1, active: false },
      ],
      sizes: [
        { number: 26, active: true },
        { number: 30, active: false },
        { number: 40, active: false },
      ],
      price: 395,
      category: 6,
      rating: 11,
    },
    {
      id: 7,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
      name: "Маргарита",
      types: [
        { number: 0, active: true },
        { number: 1, active: false },
      ],
      sizes: [
        { number: 26, active: true },
        { number: 30, active: false },
        { number: 40, active: false },
      ],
      price: 450,
      category: 5,
      rating: 10,
    },
    {
      id: 6,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
      name: "Пепперони",
      types: [
        { number: 0, active: true },
        { number: 1, active: false },
      ],
      sizes: [
        { number: 26, active: true },
        { number: 30, active: false },
        { number: 40, active: false },
      ],
      price: 675,
      category: 2,
      rating: 9,
    },
    {
      id: 4,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
      name: "Чизбургер-пицца",
      types: [
        { number: 0, active: true },
        { number: 1, active: false },
      ],
      sizes: [
        { number: 26, active: true },
        { number: 30, active: false },
        { number: 40, active: false },
      ],
      price: 415,
      category: 4,
      rating: 8,
    },
    {
      id: 9,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
      name: "Овощи и грибы 🌱",
      types: [
        { number: 0, active: true },
        { number: 1, active: false },
      ],
      sizes: [
        { number: 26, active: true },
        { number: 30, active: false },
        { number: 40, active: false },
      ],
      price: 285,
      category: 6,
      rating: 7,
    },
    {
      id: 1,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
      name: "Сырная",
      types: [{ number: 0, active: true }],
      sizes: [
        { number: 26, active: true },
        { number: 40, active: false },
      ],
      price: 245,
      category: 2,
      rating: 6,
    },
    {
      id: 2,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
      name: "Цыпленок барбекю",
      types: [{ number: 0, active: true }],
      sizes: [
        { number: 26, active: true },
        { number: 40, active: false },
      ],
      price: 295,
      category: 2,
      rating: 4,
    },
    {
      id: 0,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      name: "Пепперони Фреш с перцем",
      types: [
        { number: 0, active: true },
        { number: 1, active: false },
      ],
      sizes: [
        { number: 26, active: true },
        { number: 30, active: false },
        { number: 40, active: false },
      ],
      price: 803,
      category: 1,
      rating: 4,
    },
    {
      id: 5,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
      name: "Крэйзи пепперони",
      types: [{ number: 0, active: true }],
      sizes: [
        { number: 30, active: true },
        { number: 40, active: false },
      ],
      price: 580,
      category: 3,
      rating: 2,
    },
    {
      id: 3,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
      name: "Кисло-сладкий цыпленок",
      types: [{ number: 1, active: true }],
      sizes: [
        { number: 26, active: true },
        { number: 30, active: false },
        { number: 40, active: false },
      ],
      price: 275,
      category: 3,
      rating: 2,
    },
  ],
  avaiableTypes: ["тонкое", "традиционное"],
  avaiableSizes: [26, 30, 40],
};

const pizzas = (
  state: PizzaState = initialState,
  action: Actions
): PizzaState => {
  switch (action.type) {
    case types.SET_ACTIVE_TYPE:
      return {
        ...state,
        pizzas: state.pizzas.map((pizza) =>
          pizza.id === action.id
            ? {
                ...pizza,
                types: pizza.types
                  .map((type) =>
                    type.active === true ? { ...type, active: false } : type
                  )
                  .map((type, index) =>
                    index === action.index ? { ...type, active: true } : type
                  ),
              }
            : pizza
        ),
      };

    case types.SET_ACTIVE_SIZE:
      return {
        ...state,
        pizzas: state.pizzas.map((pizza) =>
          pizza.id === action.id
            ? {
                ...pizza,
                sizes: pizza.sizes
                  .map((size) =>
                    size.active === true ? { ...size, active: false } : size
                  )
                  .map((size) =>
                    size.number === action.number
                      ? { ...size, active: true }
                      : size
                  ),
              }
            : pizza
        ),
      };

    case types.SET_SORT_BY_NAME:
      return {
        ...state,
        pizzas: state.pizzas.sort((a, b) => (a.name > b.name ? 1 : -1)),
      };

    case types.SET_SORT_BY_PRICE:
      return {
        ...state,
        pizzas: state.pizzas.sort((a, b) => (a.price < b.price ? 1 : -1)),
      };

    case types.SET_SORT_BY_RATING:
      return {
        ...state,
        pizzas: state.pizzas.sort((a, b) => (a.rating < b.rating ? 1 : -1)),
      };

    case types.SET_CATEGORIES:
      return {
        ...state,
        pizzas: initialState.pizzas.filter((pizza) =>
          action.id === 0 ? pizzas : pizza.category === action.id
        ),
      };

    default:
      return state;
  }
};
export default pizzas;
