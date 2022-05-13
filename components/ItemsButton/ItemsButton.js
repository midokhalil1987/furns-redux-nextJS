import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const ItemsButton = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <button className="sc-hjWSTT eNEEQn">
        <span className="counter" />
        {cart.quantity} {cart.quantity <= 1 ? "item" : "items"}
        <FiShoppingBag />
        <span className="sc-cbDFGl hZMWMe">$ {cart.total} </span>
      </button>
    </>
  );
};

export default ItemsButton;
