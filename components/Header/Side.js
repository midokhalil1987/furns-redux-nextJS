import React from "react";
import { MdAdd } from "react-icons/md";

const Side = () => {
  return (
    <div className="AIfCN gFCIZB">
      <div className="sc-euMpEg jHZekv">
        <div className="uyrQk">
          <div className="ljGZHb" width="100" height="40">
            <div
              style={{
                display: "block",
                overflow: "hidden",
                position: "absolute",
                inset: "0px",
                boxSizing: "border-box",
                margin: "0px",
              }}
            >
              <a href="\">
                <img src="navbar/75.png" alt="75" />
              </a>
            </div>
          </div>
          <button className="huylZb">x</button>
        </div>
        <nav className="dmuwXB">
          <ul>
            <li>
              <a className="mm-next-level">
                home
                <MdAdd size={20} color="rgb(153,153,153)" />
              </a>
              <ul className="jVRTPG">
                <li>
                  <a>Home 1</a>
                </li>
                <li>
                  <a>Home 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>about</a>
            </li>
            <li>
              <a className="mm-next-level">
                home furniture
                <MdAdd size={20} />
              </a>
              <ul>
                <a>
                  <li>Bedroom</li>
                </a>
                <a>
                  <li>Dining</li>
                </a>
                <a>
                  <li>Living</li>
                </a>
              </ul>
            </li>
            <li>
              <a className="mm-next-level">
                office furniture
                <MdAdd size={20} />
              </a>
              <ul>
                <a>
                  <li>Lounge</li>
                </a>
                <a>
                  <li>Office Chair</li>
                </a>
                <a>
                  <li>Office Table</li>
                </a>
              </ul>
            </li>
            <li>
              <a className="mm-next-level">
                hospital furniture
                <MdAdd size={20} />
              </a>
              <ul>
                <a>
                  <li>Hospital Bed</li>
                </a>
                <a>
                  <li>Hospital Utility</li>
                </a>
              </ul>
            </li>
            <li>
              <a>contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sc-fHuLxr kMDsZl"></div>
    </div>
  );
};

export default Side;
