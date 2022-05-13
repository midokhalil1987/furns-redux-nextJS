import Link from "next/link";
import React from "react";

const SectionHead = (props) => {
  return (
    <section className="sc-iuGLgT ibsSaV">
      <div className="sc-jONnzC fooUHR container">
        <h2 className="sc-fkubCs fJzybo">{props.title}</h2>
        <ul className="sc-jcRCNh exBPNi">
          <li className="sc-fnlXEO fwaJa-D">
            <Link href="\">
              <a className="sc-jfJyPD eLYjRA">home</a>
            </Link>
          </li>
          <li className="sc-fnlXEO fwaJa-D">
            <Link href="\collection">
              <a className="sc-jfJyPD eLYjRA">{props.front}</a>
            </Link>
          </li>
          <li className="sc-fnlXEO fwaJa-D blaa">{props.titleLi}</li>
        </ul>
      </div>
    </section>
  );
};

export default SectionHead;
