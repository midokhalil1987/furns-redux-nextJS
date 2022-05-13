import React from "react";
import SwiperTri from "./swiperTri";

const TriMain = () => {
  return (
    <>
      <section className="sc-bUrLeq bBTrtx">
        <div className="sc-jONnzC fooUHR container">
          <div className="sc-hTZgZg bnjsxB row">
            <div className="sc-bqyKOL eUqWxS col">
              <div className="sc-jlIlqL OOUIm">
                <h2 className="sc-edoYdd bqagdI">Latest News</h2>
                <p className="sc-jvfqPk XbGOR">
                  Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
                  eiusmo tempor incididunt ut labore
                </p>
              </div>
            </div>
          </div>
          <SwiperTri />
        </div>
      </section>
    </>
  );
};

export default TriMain;
