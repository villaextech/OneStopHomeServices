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
                <form className="form" onSubmit={handleSubmit} data-aos="fade-up-left" data-aos-duration="">
                    <div className="titlee">Credit or Debit Card
                        <img className='w-25 d-none d-md-flex' src={logos} alt="" />
                    </div>
                    <p className="message" data-aos="fade-up">Payment Information </p>
                    <div className="row">
                        <div className='col-sm-12 col-md-6'>
                            <label>
                                <input className="input" type="text" placeholder="" required />
                                <span>First name *</span>
                            </label>
                        </div>
                        <div className=' col-sm-12 col-md-6'>
                            <label>
                                <input className="input" type="text" placeholder="" required />
                                <span>Last name *</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <label>
                                <input className="input " maxLength='14' type="tel" placeholder="" required />
                                <span>Phone no * </span>
                            </label>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <label>
                                <input className="input" type="email" placeholder="" />
                                <span>Email * </span>
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6  col-lg-3'>
                            <label className='address'>
                                <input type="text" className='input input-address' placeholder='' required />
                                <span>Street Address *</span>
                            </label>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-3 city'>
                            <label>
                                <input type="text" className='input' maxLength='25' placeholder='' required />
                                <span>City *</span>
                            </label>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-3 state'>
                            <label>
                                <input type="text" className='input' maxLength='2' placeholder='' required />
                                <span>State *</span>
                            </label>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-3 zip'>
                            <label>
                                <input type="tel" className='input' maxLength='5' placeholder='' required />
                                <span>Zip code *</span>
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-4 '>
                            <label className=''>
                                <input className="input input-card" type="text" maxLength='19' minLength='16' placeholder="" required onChange={handleCardNumberChange} value={formattedCardNumber} />
                                <span>{'Card Number (0000 0000 0000 0000) *'}</span>
                            </label>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label>
                                {<input className="input input-exdate" type="text" maxLength='5' placeholder="" required onKeyUp={formatDate} />}
                                <span>Expiration date <span> <i>( MM/YY ) *</i> </span> </span>
                            </label>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label>
                                <input className="input" type="tel" inputMode="numeric" maxlength="4" minLength='3' placeholder="" required />
                                <span>CVV/CVC <i>(000/0000) *</i>
                                </span>
                            </label>
                        </div>
                    </div>
                    <button className="submit submit-payment-form container-sm bg-warning text-dark mt-3" >Continue</button>
                </form>
            </div>
        </div>
    )
}
export default PaymenthtmlForm;