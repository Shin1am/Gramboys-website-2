import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../css/Card.css'
import { CartContext } from '../util/CartContext.js'; 
import Cart from '../Assets/cart.png';

const Card = ({id, src, path, text, description, price }) => {
    
    
    const { addToCart } = useContext(CartContext); // Use addToCart function

    const handleClick = (event) => {
        event.preventDefault();
        addToCart({
            id: id,
            src: src,
            text: text,  // Replace with the actual text prop
            description: description, // Replace with the actual description prop
            price: price, // Replace with the actual price prop
            // Add other item properties as needed
          });
    };

    return (
        <>
        <Link className='card-container' to={path}>
            <section className="card">
                <img src={src} alt={text} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{text}</h3>
                    <h3 className='card-description'>{description}</h3>
                    <section className="card-price">
                        <div className="price">
                            <h3>
                                ฿ {price}
                                <span className='cart-ac-button-container'>
                                    <button className='cart-ac-button' onClick={(event) => handleClick(event)}>
                                        <img src={Cart} alt='Cart' className='cart-button-img'style={{ width: '12px', height: '12px',
                                        filter: 'brightness(0) invert(1) sepia(0) saturate(10000%) hue-rotate(0deg)'}} />
                                     </button>  
                                </span>
                            </h3>
                        </div>
                    </section>
                </div>
             </section>
        </Link>
        </>
    )
};

export default Card;