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

  console.log(itemCards);

  return (
    <div className="Menu">
      <div className="Details">
        <div>
          <h1>{name}</h1>
          <h3>{avgRating}⭐</h3>
        </div>
        <div>
          <h1>{cuisines.join(", ")}</h1>
          <h3>{costForTwoMessage}</h3>
        </div>
      </div>

      <h2>Dishes</h2>

      <div className="Menu-items">
        {itemCards.map((item) => (
          <div key={item?.card?.info?.id}>
            <div className="item-box">
              <div>
                <h2>{item?.card?.info?.name}</h2>
                <h3>
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}{" "}
                </h3>
                <h5>{item?.card?.info?.category}</h5>
                <h5>⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}</h5>

              </div>
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
