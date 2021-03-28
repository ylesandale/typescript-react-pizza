import React from "react";
import classNames from "classnames";

type CategoriesProps = {
  categories: CategoryState[];
  onSetCategory(id: number): void;
  onSetFilter(id: number): void;
};

const Categories: React.FC<CategoriesProps> = ({
  categories,
  onSetCategory,
  onSetFilter,
}) => {
  const onSelectCategory = (id: number) => {
    onSetCategory(id);
    onSetFilter(0);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            onClick={() => onSelectCategory(category.id)}
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
