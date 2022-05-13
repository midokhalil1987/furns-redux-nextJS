import { ItemsTow } from "./ItemsTow";
import ProductImg from "./ProductImg";
import ProductIcons from "./ProductIcons";
import ProductTitle from "./ProductTitle";
import MobileIcons from "./MobileIcons";

const TabTow = () => {
  return (
    <>
      <div className="sc-hTZgZg bnjsxB products-grid-mobile row">
        {ItemsTow.map((itemTow, idx) => (
          <div key={idx} className="sc-bqyKOL eUqWxS col-6 col-md-4 col-lg-3">
            <div className="sc-DJgqy SBVsv">
              <figure className="sc-iuAqRD cgebty">
                <ProductImg
                  link={itemTow.link}
                  thumbSrc={itemTow.thumbSrc}
                  thumbAlt={itemTow.thumbAlt}
                  hovthumbSrc={itemTow.hovthumbSrc}
                  hovthumbAlt={itemTow.hovthumbAlt}
                />
                <div className="sc-ehsPLh hzakrJ">
                  <span className="sc-dcwqsv fMOvWN">{itemTow.discount}</span>
                </div>
                <ProductIcons
                  thumbAlt={itemTow.thumbAlt}
                  newPrice={itemTow.newPrice}
                  thumbSrc={itemTow.thumbSrc}
                  name={itemTow.name}
                  btnName={itemTow.btnName}
                />
              </figure>
              <ProductTitle
                link={itemTow.link}
                title={itemTow.name}
                oldPrice={itemTow.oldPrice}
                newPrice={itemTow.newPrice}
              />
              <MobileIcons link={itemTow.link} btnName={itemTow.btnName} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabTow;
