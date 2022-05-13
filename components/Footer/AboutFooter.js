import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

const AboutFooter = () => {
  return (
    <>
      <h4 className="sc-bQdRvg hrXAln">ABOUT US</h4>
      <div className="sc-jGVbWl foRdzQ">
        <p className="about-text">
          Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
          incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud.
        </p>
        <ul className="sc-dWddBi gqVbyd">
          <li className="sc-cBNeex qKkwa list-inline-item">
            <a href="facebook.com">
              <BsFacebook style={{ fontSize: "15", marginBottom: "16" }} />
            </a>
          </li>
          <li className="sc-cBNeex qKkwa list-inline-item">
            <a href="twitter.com">
              <BsTwitter style={{ fontSize: "15", marginBottom: "16" }} />
            </a>
          </li>
          <li className="sc-cBNeex qKkwa list-inline-item">
            <a href="linkedin.com">
              <BsLinkedin style={{ fontSize: "15", marginBottom: "16" }} />
            </a>
          </li>
          <li className="sc-cBNeex qKkwa list-inline-item">
            <a href="youtube.com">
              <BsYoutube style={{ fontSize: "15", marginBottom: "16" }} />
            </a>
          </li>
          <li className="sc-cBNeex qKkwa list-inline-item">
            <a href="pinterest.com">
              <BsPinterest style={{ fontSize: "15", marginBottom: "16" }} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutFooter;
