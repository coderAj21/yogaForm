import React from 'react'
import SignIn from './SignIn';
import Admission from './Admission';

const Body = ({isUser,setIsUser}) => {
  return (
    <div>
        {
        isUser?(<SignIn isUser={isUser} setIsUser={setIsUser}/>)
        :
        (<Admission isUser={isUser} setIsUser={setIsUser} />)
        }
    </div>
  )
}

export default Body;