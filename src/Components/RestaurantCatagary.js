import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatagary = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/*Header*/}
      <div className="w-6/12 mx-auto my-4  text-lg font-bold bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCatagary;
