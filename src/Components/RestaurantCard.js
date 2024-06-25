import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/Usercontext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card p-4 m-2 w-[250px] rounded-lg  bg-slate-100 hover:bg-slate-400">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};

// Higher order component function

// Input -RestaurantCard => RestaurantCardPramoted
// export const WithPramotedLable = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Pramoted</label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };
export default RestaurantCard;
