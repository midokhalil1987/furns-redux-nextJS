import React from "react";

const info = [
  {
    title: "Phone:",
    firstLink: "tel:+012345678901",
    secLink: "tel:+012345678902",
    firstP: "+012 345 678 901",
    secP: "+012 345 678 902",
  },
  {
    title: "Email:",
    firstLink: "mailto:email@here.com",
    secLink: "mailto:email2@here2.com",
    firstP: "email@here.com",
    secP: "email2@here2.com",
  },
  {
    title: "Address:",
    firstP: "Address goes here,",
    secP: "street, Crossroad 123.",
  },
];

const ContactInfo = () => {
  return (
    <div className="sc-bqyKOL eUqWxS col-lg-4">
      <div className="sc-hoXqbG mEXRk h-100">
        <h2 className="sc-lhuRmv fdCWua">Contact Info</h2>
        {info.map((fo, index) => (
          <div key={index} className="sc-cSaENr cltYlj">
            <h6 className="sc-fIYNhG jebbnf">{fo.title}</h6>
            <div className="sc-hTZspN klAxwE">
              <p>
                <a href={fo.firstLink}>{fo.firstP}</a>
              </p>
              <p>
                <a href={fo.secLink}>{fo.secP}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
