import { useState } from 'react'
import '../components/PaymentForm.css'
import imageVisa from '../images/visa-loose.svg'
import imageMaster from '../images/mastercard-loose.svg'
import logos from '../images/logos.png'
import Header from './Header'
const PaymenthtmlForm = () => {
    const [showForm, setShowForm] = useState(false)
    return (
        <>
            <Header />
            <div className="main-container">
                <form className="form ">
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
                            {<input className="input" maxLength='14' type="tel" inputMode='numeric' placeholder=""  required/>}
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
                            <input className="input" type="tel" maxLength='16' minLength='16' inputMode="numeric" placeholder="" required />
                            <span>{'Card Number (0000 0000 0000 0000)'}</span>
                        </label>
                        <label>
                            {<input className="input date-picker" type="tel" inputMode='numeric' placeholder="" required />}
                            <span>Expiration date <span> <i>( MM/YY )</i> </span> </span>
                        </label>
                        <label className=''>
                            <input className="input" type="tel" inputMode="numeric" maxlength="4" placeholder="" required />
                            <span>CVV/CVC <i>(000/0000)</i>
                            </span>
                        </label>
                    </div>
                    <button className="submit">Continue</button>
                </form>
            </div>
        </>
    )

}
export default PaymenthtmlForm;