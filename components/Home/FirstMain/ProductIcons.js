import { FiHeart } from "react-icons/fi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { DiGitCompare } from "react-icons/di";
import { ImCart } from "react-icons/im";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/cartSlice";
import { useState } from "react";

const ProductIcons = (props) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(props.newPrice);
  const [quantity, setQuantity] = useState(1);
  const clickHandler = () => {
    dispatch(addProduct({ price, quantity }));
  };
  return (
    <>
      <div className="sc-gGTEWt hIpbVP">
        <div className="btn-action">
          <button className="sc-JoojE eqbMbe wishlist">
            <FiHeart style={{ fontSize: "20px", lineHeight: "1" }} />
          </button>
        </div>
        <div className="btn-action">
          <button className="sc-JoojE eqbMbe quikview">
            <AiOutlineFullscreen
              style={{ fontSize: "20px", lineHeight: "1" }}
            />
          </button>
        </div>
        <div className="btn-action">
          <button className="sc-JoojE eqbMbe compare">
            <DiGitCompare style={{ fontSize: "20px", lineHeight: "1" }} />
          </button>
        </div>
      </div>
      <p className="sc-ihmZXn ggZsKJ">
        <button style={{ cursor: "pointer" }} onClick={clickHandler}>
          <ImCart />
          {props.btnName}
        </button>
      </p>
    </>
  );
};

export default ProductIcons;
