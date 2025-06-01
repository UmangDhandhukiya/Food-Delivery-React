import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../utills/cartSlice";

const AddToCart = () => {
  const addItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen w-[70%] m-auto p-3">
      <div className="flex justify-between">
        <h1 className="text-center font-bold text-2xl">Cart Details</h1>
        <button className="bg-orange-600 text-white rounded-lg p-2"
        onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
      {addItems.length === 0 && (
        <h1 className="text-red-600 text-center font-bold text-xl mt-10">
          Cart is empty please add something !!
        </h1>
      )}

      <MenuItems menu={addItems} />
    </div>
  );
};

export default AddToCart;
