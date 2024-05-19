import React, { useState } from 'react';
import { savePassword } from '../../Services/ApiMethods';
import { useSelector } from 'react-redux';

const SavePasswordModal = ({ isOpen, onClose, password }) => {
  const [pass,setPass]=useState(password);
  const [name,setName]=useState('')
  const {user} = useSelector((state)=>state.auth)
  const [nameError,setNameError]=useState('')
  const [passError,setPassError]=useState('')
  
  const handleSubmit=async (e)=>{
    try {
        e.preventDefault()
        if(name.length === 0 || name.trim() ===''  ){
                   setNameError('Enter valid name')
        }else if( pass.length===0 || pass.trim() ===''){
                   setPassError('Enter valid password')
        }else{
            
            const res = await savePassword({name,password:pass,userId :user._id})
            if(res){
                onClose()
            }
        }
       
    } catch (error) {
        console.log(error);
    }
      
       
  }

  const editpassword= (e)=>{
      setPassError('')
      setPass(e.target.value)
  }
  const editname= (e)=>{
    setNameError('')
    setName(e.target.value)
}
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Save Password
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-4 md:p-5">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Password Name
              </label>
              {nameError && <span className=" text-red-500 text-sm">{nameError}</span>}
              <input
                type="text"
                name="name"
                id="name"
                onChange={editname}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password 
              </label>
              {passError && <span className=" text-red-500 text-sm">{passError}</span>}
              <input
              
                name="password"
                id="password"
                placeholder="••••••••"
                onChange={editpassword}
                value={pass}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SavePasswordModal;
