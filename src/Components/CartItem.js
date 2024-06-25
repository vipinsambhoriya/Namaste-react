import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const CartItem = () => {
  const dispatch = useDispatch();

  //   const cartItems = useSelector((store) => store.cart.items);

  const store = useSelector((store) => store);
  const cartItems = store.cart.items;

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-md"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty please add item to the Cart!!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default CartItem;
