import React, { useState } from "react";
import "../styles/toggle.css";
import PricingCard from "./PricingCard";
import data from '../components/data.json'
import PaymenthtmlForm from "./PaymentForm";
const Toggle = () => {
    const [selectMonthly, setSelectMonthly] = useState(true);
    return (
        <div>
            <div className="PricingApp">
                <div className="app-container">
                    <input id="switch" type="checkbox" onChange={() => { setSelectMonthly(!selectMonthly); }} />
                    <div class="app">
                        <div class="content">
                            <label for="switch">
                                <div class="toggle"></div>
                                <div class="names">
                                    <p class="light">Monthly</p>
                                    <p class="dark">Annualy</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    {data.links.map((item, index) => {
                    })}
                    <div className="pricing-cards">

                        <PricingCard
                            title="Core"
                            cardType="core"
                            price={selectMonthly ? "399" : "188.9"}
                            val="0"
                            selectMonthly={selectMonthly}
                            buy="Buy Now"
                            href={PaymenthtmlForm}
                        />
                        <PricingCard
                            title="Pro"
                            cardType="pro"
                            price={selectMonthly ? "599" : "349.9"}
                            val="0"
                            selectMonthly={selectMonthly}
                            buy="Buy Now"
                            href={PaymenthtmlForm}
                        />
                        <PricingCard
                            title="Signature"
                            cardType=""
                            price='Custom Pricing'
                            val="1"
                            selectMonthly={selectMonthly}
                            buy="Contact Us"
                            href={PaymenthtmlForm}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Toggle;