import React from "react";

const ContactForm = () => {
  return (
    <div className="sc-bqyKOL eUqWxS col-lg-8">
      <div className="sc-hoXqbG cqWsBj">
        <h2 className="sc-lhuRmv fdCWua">Get In Touch</h2>
        <div className="sc-kKXAKc izJBQM">
          <form className="sc-jHVedQ hksoDh">
            <div className="sc-hlWxgi iqzxJk form-group">
              <div className="sc-hTZgZg bnjsxB row">
                <div className="sc-bqyKOL eUqWxS col-md-6">
                  <label className="sc-eCjjWe hQCFTN" for="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    className="sc-irOPex fgeYeS"
                  />
                </div>
                <div className="sc-bqyKOL eUqWxS mt-3 mt-md-0 col-md-6">
                  <label className="sc-eCjjWe hQCFTN" for="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    className="sc-irOPex fgeYeS"
                  />
                </div>
              </div>
            </div>
            <div className="sc-hlWxgi iqzxJk form-group">
              <label className="sc-eCjjWe hQCFTN" for="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                label="Subject"
                className="sc-irOPex fgeYeS"
              />
            </div>
            <div className="sc-hlWxgi iqzxJk form-group">
              <label className="sc-eCjjWe hQCFTN" for="message">
                Message
              </label>
              <textarea
                rows={8}
                id="message"
                name="message"
                label="Message"
                className="sc-ezrnTI fmHJuB"
              />
            </div>
            <button
              type="submit"
              color="white"
              className="sc-jXktde hOCsHb w-100"
              fontSize="standard"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
