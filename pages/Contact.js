import Link from "next/link";
import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import MyMap from "../components/Map/Map";

const Contact = () => {
  return (
    <>
      <div className="sc-gVgoRu cTMRHC">
        <section className="sc-iuGLgT ibsSaV">
          <div className="sc-jONnzC fooUHR container">
            <h2 className="sc-fkubCs fJzybo">contact</h2>
            <ul className="sc-jcRCNh exBPNi">
              <li className="sc-fnlXEO fwaJa-D">
                <Link href="\">
                  <a className="sc-jfJyPD eLYjRA">home</a>
                </Link>
              </li>
              <li className="sc-fnlXEO fwaJa-D blaa">contact</li>
            </ul>
          </div>
        </section>
        <section className="sc-hmftZk kSQXGO">
          <div className="sc-jONnzC fooUHR container">
            <div className="sc-leCVjZ gtmeDD">
              <MyMap />
            </div>
            <div className="sc-hTZgZg bnjsxB row">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
