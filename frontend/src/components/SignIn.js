import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignIn = ({isUser,setIsUser}) => {
  const navigate=useNavigate();
  const [loginData,setloginData]=useState({
    email:"",password:"",error:""
  })
  function changeHanlder(event){
    setloginData(()=>(
      {
        ...loginData,
        [event.target.name]:event.target.value
      }
    ))
  }

  async function clickHandler(event){
    event.preventDefault();
    try{
      const data=await axios.post("http://localhost:5500/api/login",loginData);
      console.log(loginData);
      fetchApi();
    }catch(error){
      console.log(error);
    }
  }
  async function fetchApi(){
    try{
        const data=await axios.get("http://localhost:5500/api/fetch");
        console.log(data);
        if(!data.data){setloginData(()=>({...loginData,error:"User is not found..."})); return;}
        navigate("/home");  

    }catch(error){
        console.log(error);
    }
  }

  return (
    <div className='w-1/3 mx-auto my-2'>
        <form className='w-full flex flex-col gap-2 my-10' onSubmit={clickHandler}>
            <h1 className='text-3xl font-semibold text-blue-500' >Sign In</h1>
            <label className='text-xl' htmlFor='name'>Email :</label>
                <input
                required
                className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
                id='email'
                type='email' 
                name='email'
                onChange={changeHanlder}
                ></input>
            <label className='text-xl' htmlFor='name'>Password :</label>
                <input
                required
                className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
                id='password'
                type='password' 
                name='password'
                onChange={changeHanlder}
                ></input>
            <p className='text-red-600 text-lg font-semibold'>{loginData.error}</p>
            <button
            className='bg-blue-500 text-white font-semibold p-2 text-xl rounded my-5 hover:bg-blue-400 transition duration-200 ease-in' 
            type='submit'
            >Sign in</button>
            {
              isUser && <p className='text-lg font-semibold' >Not Registered?
               <span className='hover:underline cursor-pointer transition duration-200 ease-in' onClick={()=>(setIsUser(!isUser))}> Create Account</span>
               </p>
            }
        </form>
    </div>
  )
}

export default SignIn