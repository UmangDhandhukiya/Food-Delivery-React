import { CDN_URL } from "../utills/constants";

const Card = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="flex flex-col justify-between rounded-3xl w-[320px] p-2 mb-2 hover:scale-95">
      <img className="w-full h-[180px] rounded-xl" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Stars</h5>
    </div>
  );
};

export default Card;
