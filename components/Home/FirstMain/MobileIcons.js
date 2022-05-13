import { FiHeart } from "react-icons/fi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { DiGitCompare } from "react-icons/di";
import { ImCart } from "react-icons/im";

const MobileIcons = (props) => {
  return (
    <>
      <div className="sc-iumJeC eLkbef">
        <div className="btn-action">
          <button className="linebtn">
            <FiHeart style={{ fontSize: "20px", lineHeight: "1" }} />
          </button>
        </div>
        <div className="btn-action">
          <button className="linebtn">
            <AiOutlineFullscreen
              style={{ fontSize: "20px", lineHeight: "1" }}
            />
          </button>
        </div>
        <div className="btn-action">
          <button className="linebtn">
            <DiGitCompare style={{ fontSize: "20px", lineHeight: "1" }} />
          </button>
        </div>
      </div>
      <a href={props.link} className="sc-ihmZXn ibIDPX">
        <button>
          <ImCart />
        </button>
        {props.btnName}
      </a>
    </>
  );
};

export default MobileIcons;
