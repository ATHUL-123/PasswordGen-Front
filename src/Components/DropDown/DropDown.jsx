import React,{ useState }  from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { logout } from '../../Features/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SavedList from '../SaveModal/SavedList';


function DropdownMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSaved,setOpenSaved] = useState(false)
  const dispatch  = useDispatch()
  const navigate  = useNavigate()


  
  const handleLogout =()=>{
     dispatch(logout())
     navigate('/login')
    
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center ms-5 mb-3 text-white "
          id="menu-button"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          <FaRegUserCircle className="text-White" size={30} />
          
        </button>
      </div>

      {menuOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <a onClick={()=>setOpenSaved(true)} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Saved</a>
            <a onClick={handleLogout} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Logout</a>
            
            
          </div>
        </div>
      )}
    </div>
    {openSaved && <SavedList isOpen={openSaved} closeModal={()=>setOpenSaved(false)} />}
    </>
  );
}

export default DropdownMenu;
