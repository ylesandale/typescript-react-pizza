import React from "react";
import classNames from "classnames";

import Button from "./Button";

type PizzaBlockProps = {
  id: number;
  name: string;
  price: number;
  sizes: size[];
  types: type[];
  imageUrl: string;
  avaiableTypes: string[];
  avaiableSizes: number[];
  onSetActiveType(id: number, index: number): void;
  onSetActiveSize(id: number, index: number): void;
  onAddCart(pizzaObj: CartItem): void;
  addedCount: number;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  name,
  price,
  sizes,
  types,
  imageUrl,
  avaiableTypes,
  avaiableSizes,
  onSetActiveType,
  onSetActiveSize,
  onAddCart,
  addedCount,
}) => {
  const activeType = types.filter((item) => item.active)[0].number;
  const activeSize = sizes.filter((item) => item.active)[0].number;

  const onAddPizza = () => {
    const newObj = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      type: avaiableTypes[activeType],
    };
    onAddCart(newObj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {avaiableTypes.map((type, index) => (
            <li
              onClick={() => onSetActiveType(id, index)}
              key={type}
              className={classNames({
                disabled: !types.map((item) => item.number).includes(index),
                active: activeType === index,
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {avaiableSizes.map((size) => (
            <li
              onClick={() => onSetActiveSize(id, size)}
              key={size}
              className={classNames({
                disabled: !sizes.map((item) => item.number).includes(size),
                active: activeSize === size,
              })}
            >
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={onAddPizza} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
};

export default PizzaBlock;
