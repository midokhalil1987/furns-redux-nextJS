import { FiHeart } from "react-icons/fi";
import { DiGitCompare } from "react-icons/di";
import { ImCart } from "react-icons/im";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

const MiniFooter = () => {
  return (
    <>
      <div className="sc-jLiVFv hrsheY">
        <div className="sc-jONnzC fooUHR container">
          <div className="sc-iWFTwQ eLfgoi">
            <button>
              <FiHeart />
              <span>Wishlist</span>
            </button>
            <button>
              <DiGitCompare />
              <span>Compare</span>
            </button>
            <Link href="\">
              <button>
                <AiOutlineHome />
                <span>Home</span>
              </button>
            </Link>
            <Link href="\Cart">
              <button>
                <ImCart />
                <span>Cart</span>
              </button>
            </Link>

            <button>
              <VscAccount />
              <span>Account</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniFooter;
