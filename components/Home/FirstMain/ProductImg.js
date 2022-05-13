import React from "react";

const ProductImg = (props) => {
  return (
    <div className="sc-hFXoIY gnZcuX">
      <a href={props.link}>
        <div className="thumb">
          <div
            style={{
              display: "inline-block",
              maxWidth: "100%",
              overflow: "hidden",
              position: "relative",
              boxSizing: "border-box",
              margin: "0px",
            }}
          >
            <img src={props.thumbSrc} alt={props.thumbAlt} />
          </div>
        </div>
        <div className="thumb hover-image">
          <div
            style={{
              display: "inline-block",
              maxWidth: "100%",
              overflow: "hidden",
              position: "relative",
              boxSizing: "border-box",
              margin: "0px",
            }}
          >
            <img src={props.hovthumbSrc} alt={props.hovthumbAlt} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductImg;
