import axios from 'axios'
import dayjs from 'dayjs';

const handleSTKPush = async (req, res) => {
  const { phone, amount } = req.body;
  
  //get timestamp
  const year = dayjs().format("YYYY");
  const month = dayjs().format("MM");
  const date = dayjs().format("DD");
  const hour = dayjs().format("HH");
  const minute = dayjs().format("mm");
  const seconds = dayjs().format("ss");

  const timestamp = year + month + date + hour + minute + seconds;

  const shortCode = process.env.BUSINESS_SHORTCODE.toString();
  const passKey = process.env.PASSKEY;

  //Get the base64 of the combination
  const dataToEncode = shortCode + passKey + timestamp;
  const password = Buffer.from(dataToEncode).toString("base64");

  //NGROK callback URL port 3000
  const callbackURL =
    "https://ulises-unvexatious-chubbily.ngrok-free.dev/api/user/callback-mpesa";

  const payload = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phone,
    PartyB: shortCode,
    PhoneNumber: phone,
    CallBackURL: callbackURL,
    AccountReference: "The Don",
    TransactionDesc: "Payment",
  };
  
  try {
    const response=await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',payload,{headers:{Authorization:`Bearer ${req.token}`}})

    res.status(201).json({
        success:true,
        data:response.data,
    })
    
    
  } catch (error) {
    res.json({
        success:false,
        message:error.message
    })
  }
};


const callbackMpesa=async(req, res) => {
  res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' });
  const callbackData = req.body;
  console.log(callbackData);
  
  if(callbackData.ResultCode === 0){
    console.log("Success");
       
  }else{
    console.log("failed");
    
  }

  console.log("Here is the callback data!", req.body);
  
  res.json({ 
    success:true,
    callbackData,
});
}

export {handleSTKPush,callbackMpesa};