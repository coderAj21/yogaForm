import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({isUser,setIsUser}) => {
    const [payment,setPayment]=useState(false);
    const [user,setUser]=useState(null);
    function clickHandler(){
        console.log("Payment is Complete...");
        setPayment(true);
    }
    async function fetchApi(){
        try{
            const data=await axios.get("https://yoga-form-six.vercel.app/api/fetch");
            if (data.status===200){
                setUser(data.data);
                console.log(user);
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        !user && fetchApi();
    },[user])
    if (!user)return;
  return (
    <div className='w-1/3 mx-auto my-10'>
        {
            isUser?
            (<div>
                <h1 className='text-2xl font-semibold'>Hiii {user.name}</h1>
                <p className='text-xl font-semibold'>Your Batch Time is  : {user.batch}</p>
                <p className='text-xl font-semibold'>Your Payment Date is : {user?.payementDate.substring(0,10)}</p>
            </div>)
            :
            (<div>
                {
                    payment?
                    (<h1 className='text-xl text-blue-500 font-bold'>Hurayyyy... Payment Complete!!!!</h1>)
                    :
                    (<div>
                        <h1 className='text-xl text-blue-500 font-bold'>Now Confirm the Payment of 500 Rs for one Month....</h1>
                        <button
                        className='bg-blue-500 text-white font-semibold p-2 text-xl my-5 rounded hover:bg-blue-400 transition duration-200 ease-in' 
                        onClick={clickHandler}
                        >Complete Payment</button>
                    </div>)
                }
            </div>)
        }
    </div>
  )
}

export default Home
