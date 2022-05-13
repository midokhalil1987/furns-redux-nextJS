import React from "react";
import { Lounges } from "../components/collections";
import MobileIcons from "../components/Home/FirstMain/MobileIcons";
import ProductIcons from "../components/Home/FirstMain/ProductIcons";
import ProductImg from "../components/Home/FirstMain/ProductImg";
import ProductTitle from "../components/Home/FirstMain/ProductTitle";
import SectionHead from "../components/sectionHead/SectionHead";
import SortItems from "../components/SortItems";

const Lounge = () => {
  return (
    <>
      <SectionHead title="lounge" front="collection" titleLi="lounge" />
      <div className="sc-fTACoA fVeurm">
        <div className="sc-jONnzC fooUHR container">
          <SortItems />
          <div className="sc-hTZgZg bnjsxB products-grid-mobile row">
            {Lounges.map((item, idx) => (
              <div
                key={idx}
                className="sc-bqyKOL eUqWxS col-6 col-md-4 col-lg-3"
              >
                <div className="sc-DJgqy SBVsv">
                  <figure className="sc-iuAqRD cgebty">
                    <ProductImg
                      link={item.link}
                      thumbSrc={item.thumbSrc}
                      thumbAlt={item.thumbAlt}
                      hovthumbSrc={item.hovthumbSrc}
                      hovthumbAlt={item.hovthumbAlt}
                    />
                    <div className="sc-ehsPLh hzakrJ">
                      <span className="sc-dcwqsv fMOvWN">{item.discount}</span>
                    </div>
                    <ProductIcons link={item.link} btnName={item.btnName} />
                  </figure>
                  <ProductTitle
                    link={item.link}
                    title={item.name}
                    oldPrice={item.oldPrice}
                    newPrice={item.newPrice}
                  />
                  <MobileIcons link={item.link} btnName={item.btnName} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lounge;
