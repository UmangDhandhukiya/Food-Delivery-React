import useRestaurantMenu from "../utills/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resDetail = useRestaurantMenu(resId);

  if (resDetail === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines } =
    resDetail?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resDetail?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  const regularCards = resDetail?.cards?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuItemsCard = regularCards?.find((c) => c?.card?.card?.itemCards);

  const itemCards = menuItemsCard?.card?.card?.itemCards || [];

  return (
    <div className="Menu center">
      <div className="Details">
        <h1>{name}</h1>
        <h2>{avgRating}</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>{cuisines.join(", ")}</h2>
      </div>
      <div className="Menu-items">
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
