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

  console.log(res);

  const onlineStatus = useStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="center page">
        Your Internet connection lost please check your connection
      </h1>
    );
  }

  if (res.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="px-16 py-6">
      <div className="flex justify-center items-center gap-3">
        <input
          type="text"
          className="w-1/3 px-8 py-2 text-lg bg-gray-200 rounded-3xl"
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
          className="text-white text-lg px-4 py-2 bg-orange-600 rounded-3xl hover:bg-orange-400 hover:text-black hover:cursor-pointer"
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
          className="text-white text-lg px-4 py-2 bg-orange-600 rounded-3xl hover:bg-orange-400 hover:text-black hover:cursor-pointer"
          onClick={() => {
            const filterRes = res.filter((res) => res.info.avgRating > 4.5);
            setFilterRes(filterRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap gap-3 mt-5 items-start">
        {filterRes.map((restaurants) => (
          <Link
            key={restaurants?.info?.id}
            to={"/restaurant/" + restaurants?.info?.id}
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
