import { ItemsFour } from "./ItemsFour";
import ProductImg from "./ProductImg";
import ProductIcons from "./ProductIcons";
import ProductTitle from "./ProductTitle";
import MobileIcons from "./MobileIcons";

const TabFour = () => {
  return (
    <>
      <div className="sc-hTZgZg bnjsxB products-grid-mobile row">
        {ItemsFour.map((itemFour, idx) => (
          <div key={idx} className="sc-bqyKOL eUqWxS col-6 col-md-4 col-lg-3">
            <div className="sc-DJgqy SBVsv">
              <figure className="sc-iuAqRD cgebty">
                <ProductImg
                  link={itemFour.link}
                  thumbSrc={itemFour.thumbSrc}
                  thumbAlt={itemFour.thumbAlt}
                  hovthumbSrc={itemFour.hovthumbSrc}
                  hovthumbAlt={itemFour.hovthumbAlt}
                />
                <div className="sc-ehsPLh hzakrJ">
                  <span className="sc-dcwqsv fMOvWN">{itemFour.discount}</span>
                </div>
                <ProductIcons
                  thumbAlt={itemFour.thumbAlt}
                  newPrice={itemFour.newPrice}
                  thumbSrc={itemFour.thumbSrc}
                  name={itemFour.name}
                  btnName={itemFour.btnName}
                />
              </figure>
              <ProductTitle
                link={itemFour.link}
                title={itemFour.name}
                oldPrice={itemFour.oldPrice}
                newPrice={itemFour.newPrice}
              />
              <MobileIcons link={itemFour.link} btnName={itemFour.btnName} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabFour;
