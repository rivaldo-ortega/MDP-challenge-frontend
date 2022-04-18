import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from '../components/Logo.js';
import NavLinks from './NavLinks';
//mport { useAppContext } from '../context/appContext';
import { useState } from 'react';
const Navbar = () => {
  // const { toggleSidebar, logoutUser, user } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn'></button>
        <div>
          <NavLinks />
        </div>
        <div className='btn-container'>
          <button type='button' className='btn'>
            RIVALDO
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
