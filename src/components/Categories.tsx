import React from "react";
import classNames from "classnames";

type CategoriesProps = {
  categories: CategoryState[];
  onSetCategory(id: number): void;
};

const Categories: React.FC<CategoriesProps> = ({
  categories,
  onSetCategory,
}) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            onClick={() => onSetCategory(category.id)}
            className={classNames({ active: category.active })}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
