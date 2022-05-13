import React, { useEffect, useState } from "react";

const SortItems = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("all");
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        relevance: "relevance",
        accending: "name (A - Z)",
        deccending: "name (Z - A)",
        priceL: "price (Low - High)",
        priceH: "price (High - Low)",
      };
      const sortProperty = types[type];
      const sorted = [].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="sc-hTZgZg bnjsxB row">
      <div className="sc-bqyKOL eUqWxS col">
        <div className="sc-cuWdqJ hDxMDl">
          <div className="sc-liccgK ehCAry">
            <p>Showing products</p>
          </div>
          <div className="sc-hJxDiT kXnEld">
            <label className="sc-hiSbEG sc-cvJIAo gZMjhS bXOnMi">Sort by</label>
            <div className="sort-by css-2b097c-container">
              <select onChange={(e) => setSortType(e.target.value)}>
                <option value="relevance">Relevance</option>
                <option value="accending">Name (A - Z)</option>
                <option value="accending">Name (Z - A)</option>
                <option value="priceL">Price (Low - High)</option>
                <option value="priceH">Price (High - Low)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortItems;
