import { useDispatch } from "react-redux";
import { CDN_URL } from "../utills/constants";
import { addItems } from "../utills/cartSlice";

const MenuItems = ({ menu }) => {
  console.log(menu);

  const dispatch = useDispatch();

  function handleAddClick(item) {
    dispatch(addItems(item))
  }

  return (
    <div>
      {menu.map((item) => (
        <div key={item?.card?.info?.id} className="flex justify-between items-center p-2 border-gray-200 border-b-2 text-gray-700">
          <div className="w-[70%]">
              <h1 className="text-md font-bold py-1">{item?.card?.info?.name}</h1>
              <h1 className="text-md py-1">₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</h1>
              <h1 className="text-sm py-1">{item?.card?.info?.description}</h1>
          </div>
          <div className="relative">
              <button 
              className="bg-black text-white rounded-lg p-2 absolute bottom-2 left-10 text-xs"
              onClick={() => handleAddClick(item)}
              >Add to cart</button>
              <img className="size-40" src={CDN_URL + item?.card?.info?.imageId}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
