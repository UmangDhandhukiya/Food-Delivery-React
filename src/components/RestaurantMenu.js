import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utills/constants";

const RestaurantMenu = () => {
  const [resDetail, setResDetail] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const menu = await fetch(MENU_API + resId);
    const json = await menu.json();
    setResDetail(json?.data);
  };

  if (!resDetail) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines } =
    resDetail?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resDetail?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

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
