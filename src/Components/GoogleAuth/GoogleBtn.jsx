// GSingnInBtn.js

import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { Register,Login } from '../../Services/ApiMethods';
import { auth, provider } from './fireBaseConfig';
import { useNavigate } from 'react-router-dom';
import { setReduxUser } from '../../Features/authSlice';

function GSingnInBtn({action,setErrorR,setPasswordE,setEmailE,setError}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
     if(action === 'register'){
        const res = await Register({ email: data.user.email,name:data.user.displayName,isGoogle:true })
          const loginSuccess = dispatch(setReduxUser(res.user))
    
          if (loginSuccess) {
              navigate('/')
          }
     }else{
        const res = await Login({ email: data.user.email,name:data.user.displayName,isGoogle:true })
        const loginSuccess = dispatch(setReduxUser(res.user))
  
        if (loginSuccess) {
            navigate('/')
        }
     }
    
    } catch (error) {
      const errorMessage = error.response?.data?.message || '';
      
      if(action === 'login'){
          if(errorMessage === 'Invalid Password'){
              setPasswordE(errorMessage);
          } else if (errorMessage === `you don't have an account`){
              setEmailE(errorMessage);
          } else {
              setError(errorMessage);
          }
      } else {
          setErrorR(errorMessage);
      }
  };
  
}

  return (


<div onClick={handleClick} className="flex flex-row justify-center items-center space-x-3">
<a  target="_blank" className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-100 hover:shadow-lg cursor-pointer transition ease-in duration-300"><img className="w-4 h-4" src="https://cdn-icons-png.freepik.com/256/2504/2504739.png?semt=ais_hybrid" alt="Behance" /></a>

</div>
  );
}

export default GSingnInBtn;
