import { useState, useEffect } from 'react';
import '../css/Checkingslip.css'

function CheckingSlip() {

const[slipOkDATA, setSlipOkDATA] = useState([]);
const[files, setFiles] = useState("")

const handleFile = (e) =>{
  setFiles(e.target.files[0]);
}


console.log("Select files:", files);

const handleSubmit = async(e) =>{
  e.preventDefault();

  const formData = new FormData();

  formData.append("files", files)

  try{


    const res = await fetch("https://api.slipok.com/api/line/apikey/19709", {
      method: "POST",
      headers: {
        "x-authorization": "SLIPOK962B0MM"
      }, 

      body: formData
    })

    if (res.ok) {
      console.log("Failed to send a request");

    }else{
      throw new Error("Failed to send a request");
    }

    const data = await res.json();
    setSlipOkDATA(data.data)
    console.log("SlipOk data:", data)

  }catch(error){

    console.log("error during fetch data: " , error)
  }




}

  return (

      <main className='container mx-auto my-5'>
      <h3 className='text-3xl'>Check Slip ละกุทำเปน react ให้มึงละครับไอ่หีมมมม</h3>
      <form onSubmit={handleSubmit}>
        <input className= 'block my-3' type= "file" accept='image/*' onChange={handleFile}/>
        <button className='bg-gray-500 text-white p-2 rounded-md' type='submit'>Check Slip</button>
        <img src={files && URL.createObjectURL(files)} alt="slip" width={300}/>
        <hr className='my-3'/>
        {slipOkDATA?.success === true ?(
            <p className='bg-green-500 text-white p-3 rounded-md'>สลิปถูกต้อง</p>
        ):(
            <p className='bg-red-500 text-white p-3 rounded-md'>สลิปไม่ถูกต้อง</p>
        )}
        <p>ผู้รับเงิน: {slipOkDATA?.reciever?.displayName}</p>
        <p>ธนาคารผู้รับตัง: {slipOkDATA?.receivingBank === "002" ? "bbl" : "promptpay"}</p>
        <p>ธนาคารผู้โอนตัง: {slipOkDATA?.sendingBank ===  "004" ? "kbank": null}</p>
        <p>วันที่โอนเงิน: {slipOkDATA?.transDate}</p>
        <p>เวลาโอนเงิน: {slipOkDATA?.transTime}</p>
        <p>จำนวนเงิน: {slipOkDATA?.amount}</p>
      
      </form>
      </main>
  );
}

export default CheckingSlip;