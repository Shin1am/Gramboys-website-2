import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Cart from '../Assets/cart.png';
import menuIcon from '../Assets/menu.png';
import closeIcon from '../Assets/close.png';
import { getAuth, signOut } from 'firebase/auth'; // Import signOut from firebase auth
import { app } from '../../firebase';
import { UserContext } from './usercontext';
import { setLocalStorageUser, removeLocalStorageUser } from './localstorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faRightFromBracket, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../util/CartContext.js';

const auth = getAuth(app); // Initialize auth from the Firebase app

function Navbar({}) {
  const [click, setClick] = useState(false);
  const {user, setUser} = useContext(UserContext);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { cartItems } = useContext(CartContext); // Access cart items from CartContext

  const handleSignOut = () => {
    // Perform logout operation
    auth.signOut().then(() => {
      // Remove user data from local storage
      removeLocalStorageUser();

      // Navigate to the desired page (e.g., Login)
      window.location.reload();
    }).catch((error) => {
      console.error("Error signing out:", error.message);
    });
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          GramBoys
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <img
            src={click ? closeIcon : menuIcon}
            alt="Menu Icon"
            style={{
              width: '22px',
              height: '22px',
              filter: 'brightness(0) invert(1) sepia(0) saturate(10000%) hue-rotate(0deg)',
            }}
          />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              หน้าหลัก
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
              คอร์สเรียน
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/About-Us' className='nav-links' onClick={closeMobileMenu}>
              เกี่ยวกับเรา
            </Link>
          </li>
          {user ? (
            <>
            </>
          ):(
            <li className='nav-item'>
              <Link to='/log-in' className='nav-links' onClick={closeMobileMenu}>
                เข้าสู่ระบบ/ลงชื่อเข้าใช้
              </Link>
            </li>
          )}
          <li className='nav-item'>
            <Link to='/shopping-cart' className='nav-links' onClick={closeMobileMenu}>
              <img
                src={Cart}
                alt='Cart'
                style={{
                  width: '20px',
                  height: '20px',
                  filter: 'brightness(0) invert(1) sepia(0) saturate(10000%) hue-rotate(0deg)',
                }}
              />
            </Link>
            {cartItems.length > 0 && (
                <div className='cart-badge'>
                  {cartItems.length}
                </div>
              )}
          </li>
          <li className='nav-item'>
            <div className='nav-links'>
              <FontAwesomeIcon icon={faDatabase} />
            </div>
          </li>
          {user ? (
            <li className='nav-item'>
              <Link to='/yourcorses' className='nav-links' onClick={closeMobileMenu}>
                <FontAwesomeIcon icon={faBook} style={{color: '#ffffff'}} />
              </Link>
            </li>
          ):(
            <>
            </>
          )}
          {user ? (
            <li className='nav-item'>
              <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                <FontAwesomeIcon icon={faUser} style={{color: '#ffffff'}} />
              </Link>
            </li>
          ):(
            <>
            </>
          )}
          {user ? (
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleSignOut}>
                <FontAwesomeIcon icon={faRightFromBracket} style={{color: '#EE4E2C'}} />
              </Link>
            </li>
          ):(
            <>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
