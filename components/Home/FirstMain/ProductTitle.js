import React from "react";

const ProductTitle = ({ link, title, oldPrice, newPrice }) => {
  return (
    <>
      <div className="sc-fXtZR cjZLsT">
        <h2 className="sc-fxNMLY cIzGyz">
          <a href={link}>{title}</a>
        </h2>
        <div className="sc-bGqPaL jsnvBr">
          <del className="price old">
            {oldPrice ? "$" : ""} {oldPrice}
          </del>
          <span className="price new">$ {newPrice}</span>
        </div>
      </div>
    </>
  );
};

export default ProductTitle;
