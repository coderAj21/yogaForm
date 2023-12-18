import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';


const Admission = ({isUser,setIsUser}) => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name:"",email:"",contact:"",age:"",address:"",batch:"",password:"",
    })
    function handlerChange(event){
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        });
    }
    const sumbitHandler=async (event)=>{
        event.preventDefault();
        try{
            const data=await axios.post("http://localhost:5500/api/signUp",formData);
            if (!data?.data?.success){
                toast.error("Email is already exits!!!! use Different Email...");
                return;
            }
            toast.success("Account is created !!!!");
            navigate("/home")

        }
        catch(error){
            console.log(error);
        } 
    }

    console.log(formData);
  return (
    <div className='w-1/3 mx-auto my-2'>
        <h1 className='text-3xl font-semibold text-blue-500'>Admission Form</h1>
        <form className='w-full flex flex-col gap-2 my-10' onSubmit={sumbitHandler}>
            <label className='text-xl' htmlFor='name'>Name :</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='name'
            type='text' 
            name='name'
            onChange={handlerChange}
            ></input>

            <label className='text-xl' htmlFor='firstName'>Email :</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='email'
            type='email' 
            name='email'
            onChange={handlerChange}
            ></input>

            <label className='text-xl' htmlFor='contact'>Contact No :</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='contact'
            type='text' 
            name='contact'
            onChange={handlerChange}
            ></input>
            <label className='text-xl' htmlFor='firstName'>Age:</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='age'
            type='text' 
            name='age'
            onChange={handlerChange}
            ></input>
            <label className='text-xl' htmlFor='firstName'>Address :</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='address'
            type='text' 
            name='address'
            onChange={handlerChange}
            ></input>
            <label className='text-xl' htmlFor='firstName'>Password :</label>
            <input
            required
            className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
            id='password'
            type='text' 
            name='password'
            onChange={handlerChange}
            ></input>
            <div className='flex gap-x-5'>
            <label className='text-xl' htmlFor='firstName'>Batch :</label>
            <select 
            name="batch" 
            required
            onChange={handlerChange}
            >
                <option value="">Select Batch</option>
                <option value="6-7 AM">6 - 7 AM</option>
                <option value="7-8 AM">7 - 8 AM</option>
                <option value="8-9 AM">8 - 9 AM</option>
                <option value="5-6 PM">5 - 6 PM</option>
            </select>
            </div>
            <button
            className='bg-blue-500 text-white font-semibold p-2 text-xl rounded my-5 hover:bg-blue-400 transition duration-200 ease-in' 
            type='submit'>Payment Now</button>
            {
              !isUser && <p className='text-lg font-semibold'>Already Registered?
               <span className='hover:underline cursor-pointer transition duration-200 ease-in'onClick={()=>(setIsUser(!isUser))} > Sign In</span>
               </p>
            }
        </form>
    </div>
  )
}

export default Admission;