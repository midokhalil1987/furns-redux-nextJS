import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav3 = () => {
  return (
    <div className="sc-biBsmb irHEYc d-none d-lg-block">
      <div className="sc-jONnzC fooUHR container">
        <div className="sc-hTZgZg bnjsxB row">
          <div className="sc-bqyKOL eUqWxS col">
            <nav className="sc-XhUvE dhrMBh">
              <ul className="sc-ikPAEB crPUiU">
                <li>
                  <Link href="/">home</Link>
                </li>
                <li>
                  <Link href="/About">about</Link>
                </li>
                <li className="dropdown">
                  <a>
                    home furniture
                    <MdKeyboardArrowDown size={20} />
                  </a>
                  <ul className="sc-tYqdw jVRTPG">
                    <Link href="/Bedroom">
                      <a>
                        <li>bedroom</li>
                      </a>
                    </Link>
                    <Link href="/Dining">
                      <a>
                        <li>dining</li>
                      </a>
                    </Link>
                    <Link href="/Living">
                      <a>
                        <li>living</li>
                      </a>
                    </Link>
                  </ul>
                </li>
                <li className="dropdown">
                  <a>
                    office furniture
                    <MdKeyboardArrowDown size={20} />
                  </a>
                  <ul className="sc-tYqdw jVRTPG">
                    <Link href="/Lounge">
                      <a>
                        <li>lounge</li>
                      </a>
                    </Link>
                    <Link href="/OfficeChair">
                      <a>
                        <li>office chair</li>
                      </a>
                    </Link>
                    <Link href="/OfficeTable">
                      <a>
                        <li>office table</li>
                      </a>
                    </Link>
                  </ul>
                </li>
                <li className="dropdown">
                  <a>
                    hospital furniture
                    <MdKeyboardArrowDown size={20} />
                  </a>
                  <ul className="sc-tYqdw jVRTPG">
                    <Link href="/HospitalBed">
                      <a>
                        <li>hospital bed</li>
                      </a>
                    </Link>
                    <Link href="/HospitalUtility">
                      <a>
                        <li>hospital utility</li>
                      </a>
                    </Link>
                  </ul>
                </li>
                <li>
                  <Link href="/Contact">contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav3;
