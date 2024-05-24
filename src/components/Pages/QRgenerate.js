import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import QRCode from 'qrcode.react';
import generatePayload from 'promptpay-qr';
import '../css/Qrgenerate.css';
import { useNavigate } from 'react-router-dom';

// Define saveImage function outside the class
const saveImage = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'image.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  img.src = 'pathimage.jpg'; 
};

const PromptPayQRGenerator = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const totalPrice = location.state.totalPrice;
  const phoneNumber = '096-259-9354';
  const [amount, setAmount] = useState(totalPrice);
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const payload = generatePayload(phoneNumber, { amount });
    setQrCode(payload);
  }, [amount]);

  return (
    <div className='Qrcode-page-container'>
      <div className='Qrcode-text'>
        <h1>โปรดแสกน QR Code จ่ายเงินให้เสร็จภายใน 10 นาที</h1>
        <p>เหลือเวลาอีก 5.00 นาที</p>
      </div>
      <div className='Qrcode-container'> {/* Add an id to the container */}
        <QRCode value={qrCode} size={300}/>
      </div>
      <div className='Qrcode-button-container'>
        <button className='cancel-button' onClick={() => navigate(-1)}>ยกเลิก</button> 
        {/* Pass saveImage as a prop to the button */}
        <button className='saveQr-button' onClick={saveImage}>บันทึก Qr code</button>
      </div>
    </div>
  );
};

export default PromptPayQRGenerator;
