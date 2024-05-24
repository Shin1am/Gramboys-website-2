import React, { useContext, useState } from 'react';
import { CartContext } from '../util/CartContext.js';
import Navbar from '../util/Navbar';
import '../css/ShoppingCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../util/Button';
import { useNavigate } from 'react-router-dom';
import PromptPayLogo from '../Assets/PromptPay-logo.png';
import VisaLogo from '../Assets/Visa_2021.svg.png';
import MastercardLogo from '../Assets/Mastercard_2019_logo.png';

const ChoosePayment = () => {
    const navigate = useNavigate();
    const { cartItems, setCartItems } = useContext(CartContext); // Include addToCart for potential future use

    // State to keep track of selected payment method
    const [selectedPayment, setSelectedPayment] = useState('qrpayment');

    // Function to handle payment selection
    const handlePaymentChange = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };

    // Filter cart items based on IDs (or other unique identifiers)
    const filteredCartItems = cartItems.filter((item) => {
        // Replace with the condition to filter based on your item data structure
        // Example: return item.id === /* ID of the item you want to display */;
        return true; // Replace with your actual filtering logic
    });

    const totalPrice = filteredCartItems.reduce((acc, item) => {
        // Extract the numeric price, removing the currency symbol (฿)
        const priceValue = parseFloat(item.price.replace(/[^\d.]/g, ''));
        return acc + priceValue;
    }, 0); // Initial accumulator value

    // Function to handle the "ชำระเงิน" button click
    const handlePaymentButtonClick = () => {
        // Navigate to the selected payment method page with the total price
        navigate(`/payment/${selectedPayment}`, { state: { totalPrice: totalPrice } });
    };

    return (
        <>
            <Navbar />
            <div className='shopping-cart-container'>
                <div className='shopping-cart-text'>
                    <h1>
                        <button onClick={() => navigate(-1)}>
                            <FontAwesomeIcon icon={faChevronRight} rotation={180} size='2xl' style={{ color: '#358CC8', marginBottom: '3px' }} />
                        </button>
                        &nbsp;เลือกวิธีชำระเงิน
                    </h1>
                </div>
                <div className='price-summarize-card-container-cp'>
                    <section className='price-summarize-card'>
                        <div className='price-summarize-details'>
                            <h1>สรุปราคา</h1>
                            <h3 className='cart-text'>
                                ตะกร้า <span className='price-text'>ราคา</span>
                            </h3>
                            <section className='price-card-data'>
                                {filteredCartItems.map((item) => (
                                    <p key={item.id}>
                                        {item.text} <span>฿ {item.price}</span>
                                    </p>
                                ))}
                            </section>
                            <h3>
                                ทั้งหมด <span>฿ {totalPrice}</span>
                            </h3>
                            <button onClick={handlePaymentButtonClick} className='price-card-button'>
                                ชำระเงิน
                            </button>
                        </div>
                    </section>
                </div>
                <div className='payment-type-container'>
                    <div className='payment-list' 
                        onClick={() => handlePaymentChange('qrpayment')} 
                        style={{ border: selectedPayment === 'qrpayment' ? '2px solid #358CC8' : '2px solid #ccc' }}>
                        <h1>ชำระด้วยด้วยระบบ QR Payment</h1>
                        <img className='input-cp' src={PromptPayLogo} alt='PromptpayLogo' style={{ width: '150px', height: 'auto' }} />
                    </div>
                    <div className='payment-list' onClick={() => handlePaymentChange('creditcard')} style={{ border: selectedPayment === 'creditcard' ? '2px solid #358CC8' : '2px solid #ccc' }}>
                        <h1>ชำระด้วยด้วยบัตรเครดิต/เดบิต</h1>
                        <img src={VisaLogo} alt='VisaLogo' style={{ width: 'auto', height: '30px' }} />
                        <img src={MastercardLogo} alt='MastercardLogo' style={{ width: 'auto', height: '30px' }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChoosePayment;
