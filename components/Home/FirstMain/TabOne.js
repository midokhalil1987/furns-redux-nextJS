import { ItemsOne } from "./ItemsOne";
import ProductImg from "./ProductImg";
import ProductIcons from "./ProductIcons";
import ProductTitle from "./ProductTitle";
import MobileIcons from "./MobileIcons";

const TabOne = () => {
  return (
    <>
      <div className="sc-hTZgZg bnjsxB products-grid-mobile row">
        {ItemsOne.map((itemOne, idx) => (
          <div key={idx} className="sc-bqyKOL eUqWxS col-6 col-md-4 col-lg-3">
            <div className="sc-DJgqy SBVsv">
              <figure className="sc-iuAqRD cgebty">
                <ProductImg
                  link={itemOne.link}
                  thumbSrc={itemOne.thumbSrc}
                  thumbAlt={itemOne.thumbAlt}
                  hovthumbSrc={itemOne.hovthumbSrc}
                  hovthumbAlt={itemOne.hovthumbAlt}
                />
                <div className="sc-ehsPLh hzakrJ">
                  <span className="sc-dcwqsv fMOvWN">{itemOne.discount}</span>
                </div>
                <ProductIcons
                  thumbAlt={itemOne.thumbAlt}
                  newPrice={itemOne.newPrice}
                  thumbSrc={itemOne.thumbSrc}
                  title={itemOne.name}
                  btnName={itemOne.btnName}
                />
              </figure>
              <ProductTitle
                link={itemOne.link}
                title={itemOne.name}
                oldPrice={itemOne.oldPrice}
                newPrice={itemOne.newPrice}
              />
              <MobileIcons link={itemOne.link} btnName={itemOne.btnName} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabOne;
