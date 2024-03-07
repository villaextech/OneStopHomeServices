import { useEffect, useState } from 'react'
import '../components/PaymentForm.css'
import imageVisa from '../images/visa-loose.svg'
import imageMaster from '../images/mastercard-loose.svg'
import logos from '../images/logos.png'
import Header from './Header'
import Swal from 'sweetalert2'
import Footer from './Footer'
const PaymenthtmlForm = () => {
    const [showAlert, setShowAlert] = useState(false);
    const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;

    const [formattedCardNumber, setFormattedCardNumber] = useState('');
    const handleCardNumberChange = (e) => {

        const { value } = e.target;
        const formattedValue = value.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1 ').trim();
        setFormattedCardNumber(formattedValue);
    };


    const [values, setValues] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values, [name]: value
        })
        console.log();
    }
    const formatDate = (e) => {
        var inputChar = String.fromCharCode(e.keyCode);
        var code = e.keyCode;
        var allowedKeys = [8];
        if (allowedKeys.indexOf(code) !== -1) {
            return;
        }

        e.target.value = e.target.value.replace(
            /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
        ).replace(
            /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
        ).replace(
            /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
        ).replace(
            /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        ).replace(
            /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
        ).replace(
            /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        ).replace(
            /\/\//g, '/' // Prevent entering more than 1 `/`
        );


    }

    const handleSubmit = () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Information Submitted successfully!",
            showConfirmButton: false,
            timer: 5000
        });
    }

    return (
        <div>
            <Header />
            <div className="main-container">
                <form className="form " onSubmit={handleSubmit}>
                    <div className="titlee">Credit or debit card
                        <img className='w-25' src={logos} alt="" />
                    </div>
                    <p className="message">Payment information </p>
                    <div className="flex">
                        <label >
                            <input className="input" type="text" placeholder="" required />
                            <span>Firstname</span>
                        </label>

                        <label>
                            <input className="input" type="text" placeholder="" required />
                            <span>Lastname</span>
                        </label>
                    </div>
                    <div className='flex'>
                        <label>
                            {<input className="input" maxLength='14' type="tel" placeholder="" required />}
                            <span>Phone no </span>
                        </label>
                        <label>
                            {<input className="input" type="email" placeholder="" />}
                            <span>Email </span>
                        </label>
                    </div>
                    <div className='flex'>
                        <label className='address'>
                            <input type="text" className='input input-address' placeholder='' required />
                            <span>Street Address</span>
                        </label>
                        <label>
                            <input type="text" className='input' maxLength='25' placeholder='' required />
                            <span>City</span>
                        </label>
                        <label>
                            <input type="text" className='input' maxLength='2' placeholder='' required />
                            <span>State</span>
                        </label>
                        <label>
                            <input type="tel" className='input' maxLength='5' placeholder='' required />
                            <span>Zip code</span>
                        </label>
                    </div>
                    <div className='flex'>
                        <label className='card-number'>
                            <input className="input" type="text" maxLength='19' minLength='16' placeholder="" required onChange={handleCardNumberChange} value={formattedCardNumber} />
                            <span>{'Card Number (0000 0000 0000 0000)'}</span>
                        </label>
                        <label>
                            {<input className="input date-picker" type="text" maxLength='5' placeholder="" required onKeyUp={formatDate} />}
                            <span>Expiration date <span> <i>( MM/YY )</i> </span> </span>
                        </label>
                        <label className=''>
                            <input className="input" type="tel" inputMode="numeric" maxlength="4" minLength='3' placeholder="" required />
                            <span>CVV/CVC <i>(000/0000)</i>
                            </span>
                        </label>
                    </div>
                    <button className="submit">Continue</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default PaymenthtmlForm;