import React from "react";
import "./footer.css";
import { FcShipped } from "react-icons/fc";
import { RiCustomerService2Fill } from "react-icons/ri";



const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="left-box">
                <div className="box">
                    <div className="icon_box">
                      <FcShipped/>
                    </div>
                    <div className="details">
                      <h3>Money Back</h3>
                      <p>21 day Money back to unsatisfied customers</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                      <RiCustomerService2Fill/>
                    </div>
                    <div className="details">
                      <h3>Customer Services</h3>
                      <p>Best customer care</p>
                    </div>
                </div>
              </div>
            <div className="right_box">
              <div className="header">
                <p>We got you covered for all Books from East African authors and books about East Africa.</p>
              </div>
              <div className="bottom">
                <div className="box">
                  <h3>Your Account</h3>
                  <ul>
                    <li>Account</li>
                    <li>Payment</li>
                    <li>Sales</li>
                  </ul>
                </div>
                <div className="box">
                  <h3>Products</h3>
                  <ul>
                    <li>Delivery</li>
                    <li>New Product</li>
                    <li>Old Product</li>
                  </ul>
                </div>
                <div className="box">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>Nizan road Fourth street.</li>
                    <li>+256(0)27 216 2100</li>
                    <li>jalinga@jalhq.org </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer;