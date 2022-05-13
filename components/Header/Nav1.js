import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [money, setMoney] = useState(false);

  const dropMoney = () => setMoney(!money);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="jRfKKZ d-none d-lg-block">
        <div className="fooUHR container">
          <div className="bnjsxB row">
            <div className="text-center text-md-left col-md-5 col-lg-3">
              <p className="welcome-title">Default Welcome Message</p>
            </div>
            <div className="col-md-7 col-lg-9">
              <div className="bluZUr mt-2 mt-md-0">
                <div className="kBztUE">
                  <button className="geYwTc" onClick={toggling}>
                    English
                    <MdKeyboardArrowDown size={24} />
                  </button>
                  <ul className={isOpen ? "btGoez show" : "btGoez"}>
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Italiano
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Francias
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Filipino
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="kBztUE">
                  <button className="geYwTc" onClick={dropMoney}>
                    USD
                    <MdKeyboardArrowDown size={24} />
                  </button>
                  <ul className={money ? "btGoez show" : "btGoez"}>
                    <li>
                      <a className="dropdown-item" href="#">
                        $ - USD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        € - EUR
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        £ - POUND
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ₣ - FRANC
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav1;
