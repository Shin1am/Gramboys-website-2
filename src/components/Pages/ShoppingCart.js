import React, { useContext, useState } from 'react';
import { CartContext } from '../util/CartContext.js';
import Navbar from '../util/Navbar'
import '../css/ShoppingCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { Button } from '../util/Button';
import { useNavigate} from 'react-router-dom';
import Shopcard from '../util/shoppingcartcard/Shopcard'

const ConfirmationPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirmation-popup">
      <p>Are you sure you want to delete this item?</p>
      <div className="button-container">
        <button className="btn-btn-primary" onClick={onConfirm}>
          Yes
        </button>
        <button className="btn-btn-secondary" onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
};


const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems, clearCart } = useContext(CartContext); // Include addToCart for potential future use
  
  const handleClearCart = () => {
      clearCart();
  };

  // Filter cart items based on IDs (or other unique identifiers)
  const filteredCartItems = cartItems.filter((item) => {
    // Replace with the condition to filter based on your item data structure
    // Example: return item.id === /* ID of the item you want to display */;
    return true; // Replace with your actual filtering logic
  });

  const [isDeleting, setIsDeleting] = useState(false); // State for deletion confirmation
  const [itemToDeleteId, setItemToDeleteId] = useState(null); // State to store the item ID for deletion

  const handleDeleteItem = (itemId) => {
    setItemToDeleteId(itemId); // Store the item ID for deletion
    setIsDeleting(true); // Show confirmation popup
    document.body.classList.add('dimmed-background'); // Add class to dim the background
  };
  
  const handleCancel = () => {
    setIsDeleting(false); // Hide popup on cancellation
    document.body.classList.remove('dimmed-background'); // Remove class to restore the background
  };

  const totalPrice = filteredCartItems.reduce((acc, item) => {
    // Extract the numeric price, removing the currency symbol (฿)
    const priceValue = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return acc + priceValue;
  }, 0); // Initial accumulator value
  
  // Format totalPrice with commas if it has three zeros
  const formattedTotalPrice = totalPrice % 1000 === 0 ? totalPrice.toLocaleString() : totalPrice.toFixed(2);
  
  const handleConfirmation = (itemId) => {
    console.log("Deleting item with ID:", itemId);
    if (itemId) {
      setCartItems((prevCartItems) => {
        return prevCartItems.filter((item) => item.id !== itemId);
      });
    }
    setIsDeleting(false);
    document.body.classList.remove('dimmed-background');
  };
  
  console.log(cartItems);

  return (
    <>
      <Navbar />
      {/* Render dimmed background only when deleting */}
      {isDeleting && <div className="dimmed-background" />}
      <div className='shopping-cart-container'>
        <div className='shopping-cart-text'>
          <h1>
            <button onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faChevronRight} rotation={180} size="2xl" style={{ color: '#358CC8', marginBottom: '3px' }} />
            </button>
            &nbsp;ตะกร้าของคุณ
            <span className='shopping-cart-numbers'>
              {'(' + (filteredCartItems.length || 0) + ' รายการ)'}
            </span>
          </h1>
        </div>
        <div className='price-summarize-card-container'>
          <section className='price-summarize-card'>
            
            <div className='price-summarize-details'>
              <h1>สรุปราคา</h1>
              <h3 className='cart-text'>ตะกร้า <span className='price-text'>ราคา</span></h3>
              <section className='price-card-data'>
                {filteredCartItems.map((item) => (
                  <p key={item.id}> 
                    {item.text} <span>฿ {item.price}</span>
                  </p>
                ))}
              </section>
              <h3>
                ทั้งหมด <span>฿ {formattedTotalPrice}</span>
              </h3>
              <Button
                buttonStyle='btn--color'
                buttonSize='btn--medium--medium'
                path='/payment-choosing'
                className='price-card-button'
              >
                ยืนยันคำสั่งซื้อ
              </Button>
            </div>
          </section>
        </div>
        <div className='item-list-container'>
          {/* <button onClick={handleClearCart}>clearcart</button> */}
          <div className='item-list'>
            {filteredCartItems.length === 0 ? (
              <div className='empty-item-text'>
                <h1>ยังไม่มีสินค้าในตะกร้า</h1>
              </div>
            ):(
              <>
              {filteredCartItems.map((item) => (
              <Shopcard
                key={item.id} // Add unique key for each item
                src={item.src}
                text={item.text}
                description={item.description}
                price={item.price}
                onDelete={() => handleDeleteItem(item.id)}
              />
            ))}
              </>
            )}
          </div>
        </div>
      </div>

      {isDeleting && (
        <ConfirmationPopup
          // Pass the itemId for confirmation to the onConfirm function
          onConfirm={() => handleConfirmation(itemToDeleteId)} // Replace with the actual item ID variable
          onCancel={handleCancel}
        />
      )}
      
    </>
  );
};

export default ShoppingCart;