import NoProducts from "../components/NoProducts";
import SectionHead from "../components/sectionHead/SectionHead";

const OfficeTable = () => {
  return (
    <>
      <SectionHead
        title="office table"
        front="collection"
        titleLi="office table"
      />
      <div className="sc-fTACoA fVeurm">
        <div className="sc-jONnzC fooUHR container">
          <NoProducts text="There are no products!" />
        </div>
      </div>
    </>
  );
};

export default OfficeTable;
