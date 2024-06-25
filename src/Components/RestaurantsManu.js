import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantsManu from "../utils/useRestaurantsManu";
import RestaurantCatagary from "./RestaurantCatagary";
import { useState } from "react";

const RestaurantsManu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantsManu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const dummy = "dummy data";

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categaries =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categaries);
  return (
    <div className=" text-center ">
      <h1 className="font-bold my-6  text-2xl  ">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categaries.map((categaries, index) => (
        <RestaurantCatagary
          key={categaries?.card?.card.title}
          data={categaries?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};
export default RestaurantsManu;
