import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="sc-gVgoRu cTMRHC">
        <section className="sc-iuGLgT ibsSaV">
          <div className="sc-jONnzC fooUHR container">
            <h2 className="sc-fkubCs fJzybo">cart</h2>
            <ul className="sc-jcRCNh exBPNi">
              <li className="sc-fnlXEO fwaJa-D">
                <Link href="\">
                  <a className="sc-jfJyPD eLYjRA">home</a>
                </Link>
              </li>
              <li className="sc-fnlXEO fwaJa-D blaa">cart</li>
            </ul>
          </div>
        </section>
        {cart.total ? (
          <div className="sc-jCXNJi ggdwPo">
            <div className="sc-jONnzC fooUHR container">
              <div className="sc-cfZFvb kNYUCL">
                <table className="sc-higWrZ sc-ha-DqFk YfQvY ehsuOU table">
                  <thead>
                    <tr>
                      <th className="sc-jlIlqL frpVTB">Image</th>
                      <th className="sc-jlIlqL frpVTB">Product Name</th>
                      <th className="sc-jlIlqL frpVTB">Unit Price</th>
                      <th className="sc-jlIlqL frpVTB">Qty</th>
                      <th className="sc-jlIlqL frpVTB">Subtotal</th>
                      <th className="sc-jlIlqL frpVTB">Action</th>
                    </tr>
                  </thead>
                  <tbody className="sc-ehSDrC eNVLfA">
                    {cart.products.map((product, idx) => (
                      <tr className="sc-hLGenU jKulFl" key={idx}>
                        <td className="sc-oHVZN khlpat">{product.img}</td>
                        <td className="sc-hcevZV gkGaMN">{product.title}</td>
                        <td className="sc-gATJxy kysZCR">$ {product.price}</td>
                        <td>{product.quantity}</td>
                        <td>$ {product.price * product.quantity}</td>
                        <td className="sc-eUWgZB gvYZbL"></td>
                      </tr>
                    ))}

                    <tr>
                      <td colSpan={6}>
                        <div className="sc-koaBrS ejnyHx">
                          Grand Total: <span> $ {cart.total}</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="sc-fWPcWZ gxxhmh">
            <IoBagHandleOutline />
            <h2>There are no products in your cart!</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
