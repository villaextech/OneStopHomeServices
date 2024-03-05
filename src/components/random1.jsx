// import '../components/PaymentForm.css'
// const PaymenthtmlForm = () => {
//     return (
//         <div className="container mt-5 bg-white rounded-2 shadow-1 overflow-hidden hover:shadow-2 cursor-default">
//             <button type="button" className="AccordionButton_button__i1s4k w-full flex py-3 px-4 sm:px-6 rtl:text-left focus:outline-none AccordionButton_active__upFoH" data-testid="nordsec_payments">
//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex-col">
//                         <div className="flex flex-wrap items-center">
//                             <p className="font-medium text-small text-grey-darkest leading-normal py-1 mr-3">Credit or debit card</p>
//                             <div className="py-1">
//                                 <div className="ProviderHeader_icons__sw6oR flex overflow-hidden">

//                                     <img className="nord-image mr-2" src="/static/icons/payment/visa-loose.svg" alt="visa" style={{ width: '34px', height: '24px', minWidth: '34px' }} />

//                                     <img className="nord-image mr-2" src="/static/icons/payment/mastercard-loose.svg" alt="mastercard" style={{ width: '28px', height: '24px', minWidth: '28px' }} />

//                                     <img className="nord-image mr-2" src="/static/icons/payment/amex-loose.svg" alt="amex" style={{ width: '24px', height: '24px', minWidth: '24px' }} />

//                                     <img className="nord-image mr-2" src="/static/icons/payment/discover-loose.svg" alt="discover" style={{ width: '44px', height: '24px', minWidth: '44px' }} />

//                                     <img className="nord-image mr-2" src="/static/icons/payment/jcb.svg" alt="jcb" style={{ width: '27px', height: '24px', minWidth: '27px' }} />

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="nord-svg nord-svg--fill inline-block AccordionButton_chevron__1MuGW" focusable="false"
//                         style={{ width: '16px', height: '16px', minWidth: '16px' }}>
//                         <title>global/icons/16/chevrons-right</title>
//                         <desc>Created with Sketch.</desc>
//                         <defs></defs>
//                         <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                             <g fill="#151922">
//                                 <polygon points="8.66666667 8 4 3.33333333 5.33333333 2 11.3333333 8 5.33333333 14 4 12.6666667"></polygon>
//                             </g>
//                         </g>
//                     </svg>

//                 </div>
//             </button>
//             <div className="border-t border-grey-lighter bg-white p-4 sm:p-6">
//                 <htmlForm novalidate="">
//                     <div className="nord-row row my-6">
//                         <div className="nord-col col">
//                             <div className="nord-row row -mb-4">
//                                 <div className="nord-col col-12">
//                                     <p className="nord-text text-base font-medium leading-normal pb-4 text-grey-darker">Payment inhtmlFormation</p>
//                                 </div>
//                                 <div className="nord-col col-12">
//                                     <div className="nord-row row items-baseline">
//                                         <div className="nord-col col-12 lg:col-6 mb-6">
//                                             <div name="scroll:firstName">
//                                                 <label className="inline-block mb-2" htmlFor="input-label-9361B40C-8449-A380-A3BC-AD1E85E6EC10">
//                                                     <strong className="nord-text text-micro leading-normal text-grey-dark block">First name
//                                                     </strong>
//                                                 </label>
//                                                 <span dir="ltr" className="nord-input__wrapper relative inline-block w-full">
//                                                     <input className="nord-input border rounded-1 w-full align-bottom leading-normal outline-none appearance-none p-3 InputField_input__E6RC1 text-grey-darkest border-red" type="text" id="input-label-9361B40C-8449-A380-A3BC-AD1E85E6EC10" name="firstName" autocomplete="cc-given-name" value="" />
//                                                 </span>
//                                                 <p className="nord-text text-micro leading-normal mt-3 flex leading-none text-red">
//                                                     <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="nord-svg nord-svg--fill inline-block mr-2" focusable="false" style={{ width: '16px', height: '16px', minWidth: '16px' }}>
//                                                         <title>global/icons/16/error</title>
//                                                         <desc>Created with Sketch.
//                                                         </desc><defs></defs>
//                                                         <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                                                             <g fill="#151922" fill-rule="nonzero">
//                                                                 <path d="M15.3784655,13.5158012 L8.90185246,1.53425102 C8.51738664,0.821916327 7.48260098,0.821916327 7.09711264,1.53425102 L0.621522109,13.5158012 C0.258529114,14.187777 0.752404091,15 1.52440328,15 L14.4766069,15 C15.2475835,15 15.7414585,14.187777 15.3784655,13.5158012 Z M7.99999381,12.9820547 C7.43556526,12.9820547 6.97747833,12.530035 6.97747833,11.9730821 C6.97747833,11.4161291 7.43556526,10.9641094 7.99999381,10.9641094 C8.56442235,10.9641094 9.02250929,11.4161291 9.02250929,11.9730821 C9.02250929,12.530035 8.56442235,12.9820547 7.99999381,12.9820547 Z M9.02250929,9.95513675 L6.97747833,9.95513675 L6.97747833,5.91924615 L9.02250929,5.91924615 L9.02250929,9.95513675 Z">
//                                                                 </path>
//                                                             </g>
//                                                         </g>
//                                                     </svg>
//                                                     <strong className="self-center">First name cannot be empty</strong>
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="nord-col col-12 lg:col-6 mb-6">
//                                             <div name="scroll:lastName">
//                                                 <label className="inline-block mb-2" htmlFor="input-label-23B9317B-7F52-ED49-A61C-A830BEBDDC43">
//                                                     <strong className="nord-text text-micro leading-normal text-grey-dark block">Last name
//                                                     </strong>
//                                                 </label>
//                                                 <span dir="ltr" className="nord-input__wrapper relative inline-block w-full">
//                                                     <input className="nord-input border rounded-1 w-full align-bottom leading-normal outline-none appearance-none p-3 InputField_input__E6RC1 text-grey-darkest border-red" type="text" id="input-label-23B9317B-7F52-ED49-A61C-A830BEBDDC43" name="lastName" autocomplete="cc-family-name" value="" />
//                                                 </span>
//                                                 <p className="nord-text text-micro leading-normal mt-3 flex leading-none text-red">
//                                                     <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="nord-svg nord-svg--fill inline-block mr-2" focusable="false"
//                                                         style={{ width: '16px', height: '16px', minWidth: '16px' }}>
//                                                         <title>global/icons/16/error</title>
//                                                         <desc>Created with Sketch.</desc><defs></defs>
//                                                         <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                                                             <g fill="#151922" fill-rule="nonzero">
//                                                                 <path d="M15.3784655,13.5158012 L8.90185246,1.53425102 C8.51738664,0.821916327 7.48260098,0.821916327 7.09711264,1.53425102 L0.621522109,13.5158012 C0.258529114,14.187777 0.752404091,15 1.52440328,15 L14.4766069,15 C15.2475835,15 15.7414585,14.187777 15.3784655,13.5158012 Z M7.99999381,12.9820547 C7.43556526,12.9820547 6.97747833,12.530035 6.97747833,11.9730821 C6.97747833,11.4161291 7.43556526,10.9641094 7.99999381,10.9641094 C8.56442235,10.9641094 9.02250929,11.4161291 9.02250929,11.9730821 C9.02250929,12.530035 8.56442235,12.9820547 7.99999381,12.9820547 Z M9.02250929,9.95513675 L6.97747833,9.95513675 L6.97747833,5.91924615 L9.02250929,5.91924615 L9.02250929,9.95513675 Z">
//                                                                 </path>
//                                                             </g>
//                                                         </g>
//                                                     </svg>
//                                                     <strong className="self-center">Last name cannot be empty</strong>
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="nord-col col-12 lg:col-6 mb-6">
//                                             <div name="scroll:cc-number"><div>
//                                                 <strong className="nord-text text-micro leading-normal mb-2 inline-block text-grey-dark"><span className="flex items-center space-x-2">
//                                                     <strong className="nord-text text-micro leading-normal inline-block text-grey-dark">Card number
//                                                     </strong>
//                                                     <span className="leading-zero"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="nord-svg nord-svg--fill inline-block text-grey" focusable="false"
//                                                         style={{ width: '16px', height: '16px', minWidth: '16px' }}><title>global/icons/16/tooltip</title><desc>Created with Sketch.</desc><defs></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                                                             <g fill="#151922" fill-rule="nonzero">
//                                                                 <path d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M8,13 C7.4,13 7,12.6 7,12 C7,11.4 7.4,11 8,11 C8.6,11 9,11.4 9,12 C9,12.6 8.6,13 8,13 Z M9.5,8.4 C9,8.7 9,8.8 9,9 L9,10 L7,10 L7,9 C7,7.7 7.8,7.1 8.4,6.7 C8.9,6.4 9,6.3 9,6 C9,5.4 8.6,5 8,5 C7.6,5 7.3,5.2 7.1,5.5 L6.6,6.4 L4.9,5.4 L5.4,4.5 C5.9,3.6 6.9,3 8,3 C9.7,3 11,4.3 11,6 C11,7.4 10.1,8 9.5,8.4 Z">
//                                                                 </path>
//                                                             </g>
//                                                         </g>
//                                                     </svg>
//                                                     </span>
//                                                 </span>
//                                                 </strong>
//                                                 <div className="InputWrapper_input__LeBkv rounded-1 border border-grey-light bg-white flex items-center overflow-hidden border-red">
//                                                     <div className="w-full NordPayField_input__jkL6y">
//                                                         <iframe name="cardNumber-ea514d05-f562-495e-bc4f-87b1c6408efb" src="https://iframe-card.nordpayments.com/cardNumber.html?origin=https%3A%2F%2Fnordcheckout.com&amp;v=2" style={{ padding: '0px', margin: '0px', width: '100%', height: '100%', overflow: 'hidden', display: 'block', userSelect: 'auto', visibility: 'visible' }}>
//                                                         </iframe>
//                                                     </div>
//                                                 </div>
//                                                 <p className="nord-text text-micro leading-normal mt-3 flex leading-none text-red">
//                                                     <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="nord-svg nord-svg--fill inline-block mr-2" focusable="false"
//                                                         style={{ width: '16px', height: '16px', minWidth: '16px' }}>
//                                                         <title>global/icons/16/error</title><desc>Created with Sketch.
//                                                         </desc><defs></defs>
//                                                         <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                                                             <g fill="#151922" fill-rule="nonzero">
//                                                                 <path d="M15.3784655,13.5158012 L8.90185246,1.53425102 C8.51738664,0.821916327 7.48260098,0.821916327 7.09711264,1.53425102 L0.621522109,13.5158012 C0.258529114,14.187777 0.752404091,15 1.52440328,15 L14.4766069,15 C15.2475835,15 15.7414585,14.187777 15.3784655,13.5158012 Z M7.99999381,12.9820547 C7.43556526,12.9820547 6.97747833,12.530035 6.97747833,11.9730821 C6.97747833,11.4161291 7.43556526,10.9641094 7.99999381,10.9641094 C8.56442235,10.9641094 9.02250929,11.4161291 9.02250929,11.9730821 C9.02250929,12.530035 8.56442235,12.9820547 7.99999381,12.9820547 Z M9.02250929,9.95513675 L6.97747833,9.95513675 L6.97747833,5.91924615 L9.02250929,5.91924615 L9.02250929,9.95513675 Z">
//                                                                 </path>
//                                                             </g>
//                                                         </g>
//                                                     </svg>
//                                                     <strong className="self-center">Card number is not valid</strong>
//                                                 </p>
//                                             </div>
//                                             </div>
//                                         </div>
//                                         <div className="nord-col col-12 lg:col-6 mb-6">
//                                             <div name="scroll:cc-exp">
//                                                 <div>
//                                                     <strong className="nord-text text-micro leading-normal mb-2 inline-block text-grey-dark">Expiration date
//                                                     </strong>
//                                                     <div className="InputWrapper_input__LeBkv rounded-1 border border-grey-light bg-white flex items-center overflow-hidden border-red">
//                                                         <div className="w-full NordPayField_input__jkL6y">
//                                                             <iframe name="expiry-ea514d05-f562-495e-bc4f-87b1c6408efb" src="https://iframe-card.nordpayments.com/expiry.html?origin=https%3A%2F%2Fnordcheckout.com&amp;v=2"

//                                                                 style={{ padding: '0px', margin: '0px', width: '100%', height: '100%', overflow: 'hidden', display: 'block', userSelect: 'auto', visibility: 'visible' }}>
//                                                             </iframe>
//                                                         </div>
//                                                     </div>
//                                                     <p className="nord-text text-micro leading-normal mt-3 flex leading-none text-red">
//                                                         <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="nord-svg nord-svg--fill inline-block mr-2" focusable="false" style={{ width: '16px', height: '16px', minWidth: '16px' }}>
//                                                             <title>global/icons/16/error</title>
//                                                             <desc>Created with Sketch.</desc><defs></defs>
//                                                             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                                                                 <g fill="#151922" fill-rule="nonzero">
//                                                                     <path d="M15.3784655,13.5158012 L8.90185246,1.53425102 C8.51738664,0.821916327 7.48260098,0.821916327 7.09711264,1.53425102 L0.621522109,13.5158012 C0.258529114,14.187777 0.752404091,15 1.52440328,15 L14.4766069,15 C15.2475835,15 15.7414585,14.187777 15.3784655,13.5158012 Z M7.99999381,12.9820547 C7.43556526,12.9820547 6.97747833,12.530035 6.97747833,11.9730821 C6.97747833,11.4161291 7.43556526,10.9641094 7.99999381,10.9641094 C8.56442235,10.9641094 9.02250929,11.4161291 9.02250929,11.9730821 C9.02250929,12.530035 8.56442235,12.9820547 7.99999381,12.9820547 Z M9.02250929,9.95513675 L6.97747833,9.95513675 L6.97747833,5.91924615 L9.02250929,5.91924615 L9.02250929,9.95513675 Z"></path>
//                                                                 </g>
//                                                             </g>
//                                                         </svg>
//                                                         <strong className="self-center">Expiration date is not valid</strong>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="nord-col col-6 lg:col-3 mb-6">
//                                             <div name="scroll:cc-cvc"><div>
//                                                 <strong className="nord-text text-micro leading-normal mb-2 d-inline-block text-grey-dark">
//                                                     <span className="flex items-center space-x-2">
//                                                         <strong className="nord-text text-micro leading-normal d-inline-block text-grey-dark">CVV/CVC</strong>
//                                                         <span className="leading-zero">
//                                                             <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="nord-svg nord-svg--fill inline-block text-grey" focusable="false" style={{ width: '16px', height: '16px', minWidth: '16px' }}>
//                                                                 <title>global/icons/16/tooltip</title>
//                                                                 <desc>Created with Sketch.</desc><defs></defs>
//                                                                 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                                                                     <g fill="#151922" fill-rule="nonzero">
//                                                                         <path d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M8,13 C7.4,13 7,12.6 7,12 C7,11.4 7.4,11 8,11 C8.6,11 9,11.4 9,12 C9,12.6 8.6,13 8,13 Z M9.5,8.4 C9,8.7 9,8.8 9,9 L9,10 L7,10 L7,9 C7,7.7 7.8,7.1 8.4,6.7 C8.9,6.4 9,6.3 9,6 C9,5.4 8.6,5 8,5 C7.6,5 7.3,5.2 7.1,5.5 L6.6,6.4 L4.9,5.4 L5.4,4.5 C5.9,3.6 6.9,3 8,3 C9.7,3 11,4.3 11,6 C11,7.4 10.1,8 9.5,8.4 Z">
//                                                                         </path>
//                                                                     </g>
//                                                                 </g>
//                                                             </svg>
//                                                         </span>
//                                                     </span>
//                                                 </strong>
//                                                 <div className="InputWrapper_input__LeBkv rounded-1 border border-grey-light bg-white flex items-center overflow-hidden">
//                                                     <div className="w-full NordPayField_input__jkL6y">
//                                                         <iframe name="cvc-ea514d05-f562-495e-bc4f-87b1c6408efb" src="https://iframe-card.nordpayments.com/cvc.html?origin=https%3A%2F%2Fnordcheckout.com&amp;v=2"
//                                                             style={{ padding: '0px', margin: '0px', width: '100%', height: '100%', overflow: 'hidden', display: 'block', userSelect: 'auto', visibility: 'visible' }}>
//                                                         </iframe>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             </div>
//                                         </div>
//                                         <div className="nord-col col-6 lg:col-3 mb-6">
//                                             <div name="scroll:postalCode">
//                                                 <label className="inline-block mb-2" htmlFor="input-label-C4BAC87B-C451-ACD7-4C9C-045435C2792D">
//                                                     <strong className="nord-text text-micro leading-normal text-grey-dark block">Postal code<span> (optional)</span>
//                                                     </strong>
//                                                 </label>
//                                                 <span dir="ltr" className="nord-input__wrapper relative inline-block w-full">
//                                                     <input className="nord-input border rounded-1 w-full align-bottom leading-normal outline-none appearance-none p-3 InputField_input__E6RC1 text-grey-darkest border-grey-light" type="text" id="input-label-C4BAC87B-C451-ACD7-4C9C-045435C2792D" name="postalCode" autocomplete="shipping postal-code" aria-label="postal code" value="" spellcheck="false" data-ms-editor="true" />
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="nord-row row my-6 text-grey-darkest">
//                         <div className="nord-col col NoticesSection_section__due_2">
//                             <div className="text-grey-darkest">
//                                 <p className="nord-text text-micro leading-normal mb-4">By submitting your inhtmlFormation and continuing to purchase, you agree to our
//                                     <a className="nord-link cursor-pointer outline-none transition-colors duration-250 ease-out underline text-grey-darkest Link_underline__XAkyC" target="_blank" rel="noopener noreferrer" href="https://account.nordcheckout.com/legal/terms-of-service/">terms of service
//                                     </a>, <a className="nord-link cursor-pointer outline-none transition-colors duration-250 ease-out underline text-grey-darkest Link_underline__XAkyC" target="_blank" rel="noopener noreferrer" href="https://account.nordcheckout.com/legal/privacy-policy/">privacy policy
//                                     </a>, and electronic document delivery.</p><p className="nord-text text-micro leading-normal">Services are subscription based and will automatically renew until you cancel. See subscription and cancellation
//                                     <a className="nord-link cursor-pointer outline-none transition-colors duration-250 ease-out underline text-inherit Link_underline__XAkyC" target="_blank" rel="noopener noreferrer" href="https://account.nordcheckout.com/legal/terms-of-service/subscription/">terms.
//                                     </a>
//                                 </p>
//                             </div>
//                             <p className="nord-text text-micro leading-normal" data-testid="PaymentInhtmlFormation">Payments are processed in
//                                 <span data-testid="PaymentInhtmlFormation-currency">USD
//                                 </span>
//                                 . Payment provider fees may apply.</p>
//                         </div>
//                     </div>
//                     <div name="scroll:payment-error-section">
//                     </div>
//                     <div className="nord-row row my-6">
//                         <div className="nord-col col">
//                             <div className="nord-row row items-center">
//                                 <div className="nord-col col-12 lg:col-auto">
//                                     <button type="submit" className="nord-button focus:outline-none font-medium align-bottom rounded-full select-none transition-colors ease-out duration-250 cursor-pointer nord-button--medium border text-white nord-button--v-contained nord-button--c-blue bg-blue border-blue relative w-full sm:w-auto">Continue</button>
//                                 </div>
//                                 <div className="nord-col col mt-6 lg:mt-0">
//                                     <div className="inline-flex items-center font-medium text-grey-darkest text-micro">
//                                         <img className="nord-image" src="/static/icons/money-back-simple/money-back-badge-small.svg" alt="money back badge small" style={{ width: '30px', height: '36px', minWidth: '30px' }} />
//                                         <div className="ml-2">You're 100% backed by our 30-day money-back guarantee.
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </htmlForm>
//             </div>
//         </div>
//     )

// }
// export default PaymenthtmlForm;