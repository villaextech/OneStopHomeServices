import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import data from '../components/data.json';

const PricingCard = ({ title, price, buy, cardType }) => {
  // const core = data.core; // Access the 'core' array from the imported JSON
  // const pro = data.pro; // Access the 'core' array from the imported JSON
  // const custom = data.custom; // Access the 'core' array from the imported JSON

  return (
    <div className=" pack-container">
      <div className="header">
        <p className="title">
          {title}
        </p>
        <div className="price-container">
          <span hidden={price === 'Custom Pricing'}>$</span>
          <span className="custom-pricing" hidden={price !== 'Custom Pricing'}>{price}</span>
          <span hidden={price === 'Custom Pricing'}>{price}</span>
          <span className="per-month" hidden={price === 'Custom Pricing'}>per month</span>
        </div>
      </div>
      <div>
        <ul className="lists">
          {cardType === 'core' ?
            data.core.map((item, index) => (
              <li className="list" key={index}>
                <span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check check-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                </span>
                <p>
                  {item.feature}
                </p>
              </li>
            )) : cardType === 'pro' ? data.pro.map((item, index) => (
              <li className="list" key={index}>
                <span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check check-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                </span>
                <p>
                  {item.feature}
                </p>
              </li>
            )) : data.custom.map((item, index) => (
              <li className="list" key={index}>
                <span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check check-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                </span>
                <p>
                  {item.feature}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="button-container ">
        <Link to="/payment" className="text-decoration-none">
          <button type="button">
            {buy}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
