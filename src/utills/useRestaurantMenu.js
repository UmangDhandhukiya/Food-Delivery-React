import { useState, useEffect } from "react";
// import { MENU_API } from "../utills/constants";

const useRestaurantMenu = (resId) => {
  const [resDetail, setResDetail] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const menu = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.2722634&lng=70.8177114&restaurantId=${resId}`);
    const json = await menu.json();
    setResDetail(json?.data);
  };

  return resDetail;
};

export default useRestaurantMenu;
