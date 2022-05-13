import { ItemsThree } from "./ItemsThree";
import ProductImg from "./ProductImg";
import ProductIcons from "./ProductIcons";
import ProductTitle from "./ProductTitle";
import MobileIcons from "./MobileIcons";

const TabThree = () => {
  return (
    <>
      <div className="sc-hTZgZg bnjsxB products-grid-mobile row">
        {ItemsThree.map((itemThree, idx) => (
          <div key={idx} className="sc-bqyKOL eUqWxS col-6 col-md-4 col-lg-3">
            <div className="sc-DJgqy SBVsv">
              <figure className="sc-iuAqRD cgebty">
                <ProductImg
                  link={itemThree.link}
                  thumbSrc={itemThree.thumbSrc}
                  thumbAlt={itemThree.thumbAlt}
                  hovthumbSrc={itemThree.hovthumbSrc}
                  hovthumbAlt={itemThree.hovthumbAlt}
                />
                <div className="sc-ehsPLh hzakrJ">
                  <span className="sc-dcwqsv fMOvWN">{itemThree.discount}</span>
                </div>
                <ProductIcons
                  thumbAlt={itemThree.thumbAlt}
                  newPrice={itemThree.newPrice}
                  thumbSrc={itemThree.thumbSrc}
                  name={itemThree.name}
                  btnName={itemThree.btnName}
                />
              </figure>
              <ProductTitle
                link={itemThree.link}
                title={itemThree.name}
                oldPrice={itemThree.oldPrice}
                newPrice={itemThree.newPrice}
              />
              <MobileIcons link={itemThree.link} btnName={itemThree.btnName} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabThree;
