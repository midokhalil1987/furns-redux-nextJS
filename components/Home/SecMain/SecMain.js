import React from "react";
import { dataSec } from "./dataSec";

const SecMain = () => {
  return (
    <section className="sc-eisiLS ctyLfQ">
      <div className="sc-jONnzC fooUHR container">
        <div className="sc-hTZgZg bnjsxB mtn-30 row">
          {dataSec.map((data) => (
            <div key={data.style} className="sc-bqyKOL eUqWxS col-lg-6">
              <a href={data.link} className="sc-exiMOr eEcFER">
                <figure>
                  <div
                    style={{
                      display: "block",
                      overflow: "hidden",
                      position: "relative",
                      boxSizing: "border-box",
                      margin: "0px",
                    }}
                  >
                    <img src={data.imgSrc} alt={data.imgAlt} sizes="100vw" />
                  </div>
                </figure>
                <div className="sc-hJJRrs" id={data.style}>
                  <div className="sc-hYAvtR bsBAkX">
                    <h3 className="sc-iWRHom DwIzj">
                      {data.h3st}
                      <br />
                      {data.h3se}
                    </h3>
                    <p>{data.par}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecMain;
