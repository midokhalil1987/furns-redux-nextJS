import React from "react";

const AccountFooter = () => {
  return (
    <>
      <h4 className="sc-bQdRvg hrXAln">MY ACCOUNT</h4>
      <div className="sc-jGVbWl foRdzQ">
        <ul className="sc-citxvW btVTVM widget-list">
          <li className="sc-cBNeex qKkwa">
            <a href="/signin">Login</a>
          </li>
          <li className="sc-cBNeex qKkwa">
            <a href="/cart">My Cart</a>
          </li>
          <li className="sc-cBNeex qKkwa">
            <a href="/wishlist">Wishlist</a>
          </li>
          <li className="sc-cBNeex qKkwa">
            <a href="/compare">Compare</a>
          </li>
          <li className="sc-cBNeex qKkwa">
            <a href="/signin">My Account</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountFooter;
