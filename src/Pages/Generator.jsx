import React, { useState,useEffect } from 'react';
import './Password.css'; // Import CSS file for styling
import DropDown from '../Components/DropDown/DropDown';
import { CiSaveDown1 } from "react-icons/ci";
import { GeneratePassword } from '../Services/ApiMethods';
import { FaCopy } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";
import  SaveForm from '../Components/SaveModal/SaveModal';

function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [copyBtnPos, setCopyBtnPos] = useState({ x: 0, y: 0 });
    const [loading,setLoading] = useState(false)
    const [showSaveButton ,setSaveButton] =useState(true)
    const [openModal,setOpenModal] = useState(false)

    const generatePassword = async () => {
       setLoading(true)
        try {
            const data =   {
                upperCase:includeUppercase,
                lowerCase:includeLowercase,
                number:includeNumbers,
                Symbol:includeSymbols,
                length:length
            }
    
            const res = await  GeneratePassword(data)
             setPassword(res)
             setLoading(false)
        } catch (error) {
            console.log(error);
        }

    };

    const copyToClipboard = () => {
        if(password && !showSaveButton){
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy!', err);
        });
    }
    };
    const handleMouseMove = (e) => {
        if(password){
            const rect = e.currentTarget.getBoundingClientRect();
            setCopyBtnPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };

    const changeLength = (e) => {
        const currentValue = parseInt(e.target.value, 10);
        setLength(currentValue);
    }
   
    return (
        <>
        <div className="container mx-auto mt-10 p-4 bg-blue-900 rounded-lg shadow-lg">
            <div className="flex items-center mb-1 ">
        <h2 className="title text-white text-2xl">Password Generator</h2>
         <DropDown />
      </div>
      <div 
            className="result relative" 
            onMouseMove={handleMouseMove}
            onClick={copyToClipboard}
        >
            <div className="result__viewbox bg-blue-800 rounded text-white text-center leading-16">
                {loading ? <ImSpinner /> : password}
            </div>
            {password && (
                <>
                
                     {!showSaveButton &&(   <button 
                            id="copy-btn" 
                            className="absolute w-9 h-9 bg-white rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2 scale-0 transition duration-350 ease-in-out flex items-center justify-center"
                            style={{ left: `${copyBtnPos.x}px`, top: `${copyBtnPos.y}px` }}
                        >
                            <FaCopy />
                        </button>) }
                
                        <div 
                            onClick={()=>setOpenModal(true)}
                            className="save-button-container absolute flex items-center justify-center " 
                            style={{ width: '50px', height: '50px', top: '10px', right: '10px' }}
                            onMouseEnter={() => setSaveButton(true)} 
                            onMouseLeave={() => setSaveButton(false)}
                        >
                            <CiSaveDown1 className='text-white' style={{ fontSize: '24px' }} />
                        </div>
                  
                </>
            )}
        </div>
            <div className="length range__slider mt-4" data-min="4" data-max="32">
                <div className="length__title field-title" >length:{length}</div>
                <input id="slider" type="range" min="4" max="32" value={length} onChange={changeLength} className="w-full h-2 bg-blue-800 rounded appearance-none" />
            </div>

            <div className="settings mt-4">
                <span className="settings__title field-title text-white uppercase text-xs">settings</span>
                <div className="setting">
                    <input type="checkbox" id="uppercase" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} className="hidden" />
                    <label htmlFor="uppercase" className="flex items-center text-white text-sm cursor-pointer">
                        Include Uppercase
                    </label>
                </div>
                <div className="setting">
                    <input type="checkbox" id="lowercase" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} className="hidden" />
                    <label htmlFor="lowercase" className="flex items-center text-white text-sm cursor-pointer">
                        Include Lowercase
                    </label>
                </div>
                <div className="setting">
                    <input type="checkbox" id="number" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="hidden" />
                    <label htmlFor="number" className="flex items-center text-white text-sm cursor-pointer">
                        Include Numbers
                    </label>
                </div>
                <div className="setting">
                    <input type="checkbox" id="symbol" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="hidden" />
                    <label htmlFor="symbol" className="flex items-center text-white text-sm cursor-pointer">
                        Include Symbols
                    </label>
                </div>
            </div>
            
              <button disabled={loading}  className=" btn generate mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white uppercase font-bold text-sm py-2 px-4 rounded-lg hover:shadow-md transition duration-150" id="generate" onClick={generatePassword}>  {loading ? 'Generating...' : 'Generate Password'}</button>
        </div>
        {openModal && <SaveForm isOpen={openModal}  password={password} onClose={()=>setOpenModal(false)}/>}
        </>
    );
}

export default PasswordGenerator;
