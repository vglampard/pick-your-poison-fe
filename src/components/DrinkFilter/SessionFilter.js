import React from "react";

export default function SessionFilter({ drinkTypes, onFilterChange }) {
  return (
    <section className="filters" aria-labelledby="filters-header">
      <header id="filters-header">{"Filters"}</header>

      <ul>
        {drinkTypes.map((drinkType) => (
          <li key={drinkType}>
            <label>
              <input
                onChange={onFilterChange}
                type="checkbox"
                value={drinkType}
              />
              {drinkType}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
