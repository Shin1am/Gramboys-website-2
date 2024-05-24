import React from 'react';
import '../shoppingcartcard/Shopcard.css'; // Assuming the CSS path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Shopcard = ({id, src, text, description, price, onDelete }) => { // Add onDelete prop

  return (
    <>
      <section className="shopcard">
        <img src={src} alt={text} className="shopcard-img" />
        <div className="shopcard-details">
          <h3 className="shopcard-title">{text}</h3>
          <h3 className='shopcard-description'>{description}</h3>
          <section className="shopcard-price">
            <div className="price">
              <h3>฿ {price}</h3>
              <p>{id}</p>
            </div>
          </section>

          {/* Add delete button with onClick handler */}
          <button className="delete-button" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} size='xl' style={{color: '#c40e0e'}}/>
          </button>
        </div>
      </section>
    </>
  );
};

export default Shopcard;
