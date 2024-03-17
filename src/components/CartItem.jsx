import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item, index }) => {
  const title = item.title;
  const desc = item.description;
  const price = item.price;
  const dispatch = useDispatch();

  const removefromcart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className=" border-b-2 border-black  flex flex-row h-[200px] w-[450px]  gap-4 ">
      <div className=" h-[180px] h-max-[220px] w-[1/2]">
        <img src={item.image} alt="" className=" h-full" />
      </div>
      <div className=" flex flex-col p-3 w-[300px] gap-2">
        <h2 className=" font-semibold text-center">{title}</h2>
        <p className=" truncate">{desc.split(" ").slice(0,6)+"..."}</p>

        <div className=" flex justify-between items-center mt-4 ">
          <p className=" font-semibold">{price}</p>
          <button onClick={removefromcart}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
