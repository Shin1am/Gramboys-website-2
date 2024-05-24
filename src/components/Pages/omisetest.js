import React, { useState } from 'react';
import omise from '../util/omise'; // Import Omise client configuration
import Script from 'react-load-script';

const PaymentForm = () => {
  const [qrImage, setQrImage] = useState(null);
  let OmiseCard; 
  const generatePromptPayQR = async () => {
    const response = await omise.createSource({
      type: 'promptpay',
      amount: 100, // Specify the amount in your desired currency
    });

    if (response && response.data && response.data.source) {
      const qrImageURL = response.data.source.qr_image;
      setQrImage(qrImageURL);
    } else {
      console.error('Error generating PromptPay QR code');
    }
  };

  const handleLoadScript = () => {
    OmiseCard = console.log(window.OmiseCard)
    OmiseCard.configure({
      publicKey: 'OMISE_PUBLIC_KEY',
      currency: 'thb',
      frameLabel: 'Gramboy course',
      submitLabel: 'PAY NOW',
      buttonLabel: 'Pay with omise'

    });
  }

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethods: 'credit_card',
      otherPaymentMethods: []
    });
    OmiseCard.configureButton('#credit-card');
  }

  const handleclick = e => {
    e.preventDefault();
    creditCardConfigure();
  }

  return (
    <div>
      <Script url="https://cdn.omise.co/omise.js" 
        onLoad={handleLoadScript}
      />
      <button onClick={generatePromptPayQR}>Generate PromptPay QR Code</button>
      <button
        id="credit-card"
        type = "button"
        onClick={handleclick}
        > Pay with creditcard </button>
      {qrImage && <img src={qrImage} alt="PromptPay QR Code" />}
    </div>
  );
};

export default PaymentForm;
