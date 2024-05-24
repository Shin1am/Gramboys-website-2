import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Assets/cart.png';
import '../css/CardItem.css';
import { CartContext } from './CartContext.js'; 


const PictureSize = ['cards__item__pic-wrap' , 'cards__item__pic-wrap__small', 'cards__item__pic-wrap__medium']
const textFontSize = ['cards__item__text' , 'cards__item__text__small', 'cards__item__text__medium']
const DesFontSize = ['cards_item_text_description' , 'cards_item_text_description__small', 'cards_item_text_description__medium']
const PriceFontSize = ['cards_item_price' , 'cards_item_price__small', 'cards_item_price__medium']

function CardItem(props) {

    const checkPictureSize = PictureSize.includes(props.picWrapSize) ? props.picWrapSize : PictureSize[0];
    const checktextFontSize = textFontSize.includes(props.textSize) ? props.textSize : textFontSize[0];
    const checkDesFontSize = DesFontSize.includes(props.descriptionSize) ? props.descriptionSize : DesFontSize[0];
    const checkPriceFontSize = PriceFontSize.includes(props.priceSize) ? props.priceSize : PriceFontSize[0];

    const { addToCart } = useContext(CartContext); // Use addToCart function

    const handleClick = (event) => {
        event.preventDefault();
        addToCart({
            id: props.id, // Replace with the actual ID prop (if available)
            src: props.src,
            text: props.text,  // Replace with the actual text prop
            description: props.description, // Replace with the actual description prop
            price: props.price, // Replace with the actual price prop
            // Add other item properties as needed
          });
    };

  return (
    <>
        <li className='cards__item'>
            <Link className={props.style} to={props.path}>
                <figure className={checkPictureSize} data-category={props.label}>
                    <img src={props.src} alt='Travel' className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className={checktextFontSize}>{props.text}</h5>
                    <p className={checkDesFontSize}>{props.description}</p>
                    <p className= {checkPriceFontSize}>฿{props.price} 
                        <span className='cart-button-container'>
                        <button className='cart-button' onClick={(event) => handleClick(event)}>
                            <img src={Cart} alt='Cart' className='cart-button-img'style={{ width: '17px', height: '17px',
                            filter: 'brightness(0) invert(1) sepia(0) saturate(10000%) hue-rotate(0deg)'}} />
                        </button>  
                        </span>
                    </p>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem;