import { RiSendPlaneFill } from "react-icons/ri";

const NewsFooter = () => {
  return (
    <>
      <h4 className="sc-bQdRvg hrXAln">NEWSLETTER</h4>
      <div className="sc-jGVbWl foRdzQ">
        <div className="sc-ljRaeN iSSrtJ">
          <form className="sc-jHVedQ hksoDh">
            <div className="mb-0 form-group">
              <label
                htmlFor="newsletterInput"
                className="sc-hiSbEG gZMjhS sr-only"
              >
                Newsletter
              </label>
              <input
                type="email"
                id="newsletterInput"
                placeholder="Enter E-mail Address"
                className="sc-fmlJrY bojNVM"
              />
              <button color="white" className="sc-jXktde kjwxcu">
                <RiSendPlaneFill />
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsFooter;
