import Card from "./Card";
import { restaurants, API_KEY } from "../utills/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useStatus from "../utills/useStatus";

const Main = () => {
  const [res, setres] = useState([]);

  const [filterRes, setFilterRes] = useState([]);

  const [serach, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_KEY);

    const json = await data.json();

    setres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useStatus();

  if (onlineStatus === false) {
    return <h1 className="center page">Your Internet connection lost please check your connection</h1>;
  }

  if (res.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Main">
      <div className="Search">
        <input
          type="text"
          value={serach}
          onChange={(e) => {
            setSearch(e.target.value);

            // const filterData = res.filter((res) =>
            //   res.info.name.toLowerCase().includes(serach.toLocaleLowerCase())
            // );
            // setFilterRes(filterData);
          }}
          placeholder="Search For Restaurant"
        />

        <button
          className="btn"
          onClick={() => {
            const filterData = res.filter((res) =>
              res.info.name.toLowerCase().includes(serach.toLocaleLowerCase())
            );
            setFilterRes(filterData);
          }}
        >
          Search
        </button>

        <button
          className="btn"
          onClick={() => {
            const filterRes = res.filter((res) => res.info.avgRating > 4.5);
            setFilterRes(filterRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-cards">
        {filterRes.map((restaurants) => (
          <Link
            key={restaurants?.info?.id}
            to={"/restaurant/" + restaurants?.info?.id}
            className="i"
          >
            <Card resData={restaurants} />
          </Link>
          // <Card key={restaurants?.info?.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Main;
