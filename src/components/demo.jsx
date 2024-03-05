import React from "react";
import "../styles/style.css"
// import data from '../components/data.json';
const PricingCard = ({ title, price, buy, cardType, feature }) => {

    return (
        <div class="pack-container">
            <div class="header">
                <p class="title">
                    {title}
                </p>
                <div class="price-container">
                    <span hidden={price === 'Custom Pricing'}>$</span>
                    <span className="custom-pricing" hidden={price !== 'Custom Pricing'}>{price}</span>
                    <span hidden={price === 'Custom Pricing'}>{price}</span>
                    <span className="per-month" hidden={price === 'Custom Pricing'}>per month</span>
                </div>
            </div>
            <div>
                <ul class="lists">
                    {feature.map((item) => (<li key={item}>{item}</li>))}
                </ul>

            </div>
            <div className="button-container">
                <a className="text-decoration-none">
                    <button type="button">
                        {buy}
                    </button>
                </a>
            </div>
        </div>
    );
};

export default PricingCard;







