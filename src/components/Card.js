import { CDN_URL } from "../utills/constants";

const Card = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="Card">
      <img className="card-image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Stars</h5>
    </div>
  );
};

export default Card;
