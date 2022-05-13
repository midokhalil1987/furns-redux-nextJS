import Link from "next/link";
import React from "react";

const imgs = [
  {
    imgSrc: "about/about01.jpeg",
    imgAlt: "about01",
  },
  {
    imgSrc: "about/about02.jpeg",
    imgAlt: "about02",
  },
];
const abts = [
  {
    title: "OUR STORES",
    descrip:
      "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.",
  },
  {
    title: "OUR MISSION",
    descrip:
      "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.",
  },
];

const About = () => {
  return (
    <>
      <div className="sc-gVgoRu cTMRHC">
        <section className="sc-iuGLgT ibsSaV">
          <div className="sc-jONnzC fooUHR container">
            <h2 className="sc-fkubCs fJzybo">about us</h2>
            <ul className="sc-jcRCNh exBPNi">
              <li className="sc-fnlXEO fwaJa-D">
                <Link href="\">
                  <a className="sc-jfJyPD eLYjRA">home</a>
                </Link>
              </li>
              <li className="sc-fnlXEO fwaJa-D blaa">about</li>
            </ul>
          </div>
        </section>
        <section className="about-page-wrapper">
          <div className="sc-jONnzC fooUHR container">
            <h2>
              Furns is a global furniture destination for somethings. We sell
              cutting-edge furniture and offer a wide variety of fashion-related
              content.
            </h2>
          </div>
          <div className="sc-jONnzC dZixCr mt-3 mt-md-5 container-fluid">
            <div className="sc-hTZgZg bnjsxB row">
              {imgs.map((photo, index) => (
                <div className="sc-bqyKOL eUqWxS col-md-6">
                  <div key={index}>
                    <img src={photo.imgSrc} alt={photo.imgAlt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sc-jONnzC fooUHR mt-3 mt-md-5 container">
            <div className="sc-hTZgZg bnjsxB row">
              {abts.map((abt, index) => (
                <div key={index} className="sc-bqyKOL eUqWxS mb-5 col-lg-6">
                  <div className="about-store">
                    <h4>{abt.title}</h4>
                    <p>{abt.descrip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
