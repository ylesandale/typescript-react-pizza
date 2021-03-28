import React from "react";
import classNames from "classnames";

interface FiltersProps {
  filters: Filter[];
  onSetFilter(id: number): void;
  onSetSortByName(): void;
  onSetSortByRating(): void;
  onSetSortByPrice(): void;
  onSetVisiblePopup(): void;
}

const SortPopup: React.FC<FiltersProps> = ({
  filters,
  onSetFilter,
  onSetSortByName,
  onSetSortByRating,
  onSetSortByPrice,
  onSetVisiblePopup,
}) => {
  const onSort = (id: number, name: string) => {
    onSetFilter(id);
    if (name === "алфавиту") {
      onSetSortByName();
    } else if (name === "популярности") {
      onSetSortByRating();
    } else if (name === "цене") {
      onSetSortByPrice();
    }
    onSetVisiblePopup();
  };

  return (
    <div className="sort__popup">
      <ul>
        {filters.map((filter) => (
          <li
            onClick={() => onSort(filter.id, filter.name)}
            key={filter.id}
            className={classNames({ active: filter.active })}
          >
            {filter.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortPopup;
