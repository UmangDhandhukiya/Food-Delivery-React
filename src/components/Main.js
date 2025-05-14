import Card from "./Card";
import { restaurants, API_KEY } from "../utills/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Main = () => {
  const [res, setres] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_KEY);

    const json = await data.json();

    setres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (res.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Main">
      <div className="Search">
        {/* <input type="text" placeholder="Search For Restaurant" /> */}
        <button
          className="btn"
          onClick={() => {
            const filterRes = res.filter((res) => res.info.avgRating > 4);
            setres(filterRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-cards">
        {res.map((restaurants) => (
          <Card key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Main;
