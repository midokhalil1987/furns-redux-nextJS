import { BsSearch } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineMenu } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Nav2 = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);

  const collapseHandler = () => setIsCollapsed(!isCollapsed);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className="sc-fvhFOF kBoZAC">
      <div className="sc-jONnzC fooUHR container">
        <div className="sc-hTZgZg bnjsxB align-items-center row">
          <div className="eUqWxS d-lg-none col-3 col-lg-3">
            <button className="sc-dtwnrN cyzHvR" onClick={collapseHandler}>
              <AiOutlineMenu />
            </button>
          </div>
          <div className="sc-bqyKOL eUqWxS col-5">
            <div className="sc-eGCaLh dBnnAO logo--desktop">
              <a href="/">
                <div
                  style={{
                    position: "absolute",
                    margin: "0px",
                  }}
                >
                  <img src="navbar/75.png" alt="75" />
                </div>
              </a>
            </div>
          </div>
          <div className="eUqWxS d-lg-none text-lg-right col-4 col-lg-3">
            <div className="bklCHe">
              <div className="klXnTL">
                <button className="cyzHvR">
                  <BsSearch id="BsSearch" size={24} />
                </button>
              </div>
              <div className="klXnTL">
                <button className="cyzHvR">
                  <AiOutlineSetting id="AiOutlineSetting" size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="sc-bqyKOL eUqWxS d-none d-lg-block col-md-9">
            <div className="bklCHe">
              <div className="klXnTL">
                <button className="cyzHvR">
                  <BsSearch id="BsSearch" size={24} />
                </button>
              </div>
              <div className="klXnTL">
                <button className="jNAebc header-action-btn" onClick={toggling}>
                  <VscAccount id="VscAccount" size={24} />
                  <ul className={isOpen ? "eJwAVN show" : "eJwAVN"}>
                    <Link href="/signin">
                      <a>
                        <li>Signin</li>
                      </a>
                    </Link>
                    <Link href="/Cart">
                      <li>Cart</li>
                    </Link>
                    <Link href="/wishlist">
                      <a>
                        <li>Wishlist</li>
                      </a>
                    </Link>
                    <Link href="/compare">
                      <a>
                        <li>Compare</li>
                      </a>
                    </Link>
                  </ul>
                </button>
              </div>
              <div className="klXnTL">
                <button className="cyzHvR pr-1">
                  <BiShoppingBag id="BsSearch" size={24} />
                  <span className="jhDsRM"> {quantity} </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
