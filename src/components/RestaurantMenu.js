import { useState } from "react";
import useRestaurantMenu from "../utills/useRestaurantMenu";
import MenuItems from "./MenuItems";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {

  const[current,setCurrent] = useState(0)

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

  const categoryType = regularCards.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleClick = (index) => {
    setCurrent(index)
  }

  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 font-medium">
      <div className="flex justify-between items-center w-[60%] mt-2">
        <div>
          <h1 className="text-xl">{name}</h1>
          <h3>{avgRating}⭐</h3>
        </div>
        <div>
          <h1 className="text-xl">{cuisines.join(", ")}</h1>
          <h3>{costForTwoMessage}</h3>
        </div>
      </div>

      <h1 className="text-2xl">--Menu--</h1>

      <div className="w-[60%] flex flex-col gap-4 bg-gray-100 cursor-pointer" >
        {categoryType?.map((category,index) => (
          <div
            key={category?.card?.card?.categoryId}
            className="flex flex-col justify-between px-6 py-4 bg-white"
             onClick={() => {handleClick(index)}}
          >
            <div className="flex justify-between">
              <h1 className="font-bold text-lg">
                {category?.card?.card?.title}(
                {category?.card?.card?.itemCards.length})
              </h1>
              <h1 style={{rotate:index === current ? "" : "180deg"}} className="font-bold text-lg">{index === current ? "˄" : "˄"}</h1>
            </div>

            {index === current && <MenuItems menu={category?.card?.card?.itemCards}/>}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
