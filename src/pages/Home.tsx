import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/actions/categories";
import { setFilter, setVisiblePopup } from "../redux/actions/filters";
import {
  setActiveType,
  setActiveSize,
  setSortByName,
  setSortByPrice,
  setSortByRating,
  setCategories,
} from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

import { Categories, SortPopup, PizzaBlock } from "../components";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const pizzas: Pizza[] = useSelector(
    (state: PizzaSelector) => state.pizzas.pizzas
  );
  const categories: CategoryState[] = useSelector(
    (state: CategorySelector) => state.categories
  );
  const filters: Filter[] = useSelector(
    (state: FilterSelector) => state.filters.filters
  );
  const visiblePopup: boolean = useSelector(
    (state: FilterSelector) => state.filters.visiblePopup
  );
  const avaiableSizes: number[] = useSelector(
    (state: PizzaSelector) => state.pizzas.avaiableSizes
  );
  const avaiableTypes: string[] = useSelector(
    (state: PizzaSelector) => state.pizzas.avaiableTypes
  );
  const cartItems: any = useSelector((state: CartSelector) => state.cart.items);

  const onSetCategory = (id: number) => {
    dispatch(setCategory(id));
    dispatch(setCategories(id));
  };

  const onSetFilter = (id: number) => {
    dispatch(setFilter(id));
  };

  const onSetVisiblePopup = () => {
    dispatch(setVisiblePopup());
  };

  const onSetActiveType = (id: number, index: number) => {
    dispatch(setActiveType(id, index));
  };

  const onSetActiveSize = (id: number, number: number) => {
    dispatch(setActiveSize(id, number));
  };

  const onSetSortByName = () => {
    dispatch(setSortByName());
  };

  const onSetSortByRating = () => {
    dispatch(setSortByRating());
  };

  const onSetSortByPrice = () => {
    dispatch(setSortByPrice());
  };

  React.useEffect(() => {
    onSetFilter(0);
  }, [categories]);

  const onAddCart = (pizzaObj: CartItem) => {
    dispatch(addPizzaToCart(pizzaObj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categories} onSetCategory={onSetCategory} />
        <div className="sort">
          <div className="sort__label">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
            <b>Сортировка по:</b>
            {filters.map((filter) =>
              filter.active ? (
                <span key={filter.id} onClick={() => onSetVisiblePopup()}>
                  {filter.name}
                </span>
              ) : null
            )}
          </div>
          {visiblePopup && (
            <SortPopup
              filters={filters}
              onSetFilter={onSetFilter}
              onSetSortByName={onSetSortByName}
              onSetSortByRating={onSetSortByRating}
              onSetSortByPrice={onSetSortByPrice}
              onSetVisiblePopup={onSetVisiblePopup}
            />
          )}
        </div>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza) => (
          <PizzaBlock
            id={pizza.id}
            avaiableSizes={avaiableSizes}
            avaiableTypes={avaiableTypes}
            price={pizza.price}
            key={pizza.id}
            name={pizza.name}
            imageUrl={pizza.imageUrl}
            types={pizza.types}
            sizes={pizza.sizes}
            onSetActiveType={onSetActiveType}
            onSetActiveSize={onSetActiveSize}
            onAddCart={onAddCart}
            addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
