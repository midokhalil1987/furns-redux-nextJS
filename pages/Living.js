import NoProducts from "../components/NoProducts";
import SectionHead from "../components/sectionHead/SectionHead";

const Living = () => {
  return (
    <>
      <SectionHead title="living" front="collection" titleLi="living" />
      <div className="sc-fTACoA fVeurm">
        <div className="sc-jONnzC fooUHR container">
          <NoProducts text="There are no products!" />
        </div>
      </div>
    </>
  );
};

export default Living;
