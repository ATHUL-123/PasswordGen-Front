
import React from 'react';
import { useState,useEffect } from 'react';
import { fetchSaved } from '../../Services/ApiMethods';
import { MdDeleteForever } from "react-icons/md";
import { removeSaved } from '../../Services/ApiMethods';

const SavedList = ({ isOpen, closeModal }) => {
  
  const [passwords,setPasswords]=useState([]);
  const handleRemove =async(passId)=>{
   
    const res =await removeSaved(passId)
    if(res.status===200){
        
    };
  }

  useEffect( () => {
    const fetchData = async () => {
      const res = await fetchSaved();
      setPasswords(res)
    };
  
    fetchData();
  
  
  }, [handleRemove])

 
   
 



  return (
    <div open={isOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30" />

        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  Saved Passwords
                </div>
                <div className="mt-2 max-h-60 overflow-y-auto">
                  <ul className=" list-disc pl-5 space-y-1">
                    {passwords.map((password, index) => (
                      <li key={index} className='flex items-center '>
                        <span className="font-semibold  mr-5">{password.name}</span>:  {password.value}
                        <span onClick={()=>handleRemove(password._id)} className='ms-5 text-red-500'><MdDeleteForever /></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedList;