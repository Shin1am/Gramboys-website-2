import React from 'react';
import '../css/Button.css';
import { Link } from 'react-router-dom';

const STYLE = ['btn--primary', 'btn--outline', 'btn--color', 'btn--color--2'];

const SIZES = ['btn--medium', 'btn--large', 'btn--medium--long', 'btn--medium--medium', 'btn--medium--short'];

export const Button = ({
    children,
    type,
    onClick, 
    buttonStyle, 
    buttonSize,
    path
}) => {
        const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

        return (
            <Link to={path} className='btn-mobile'>
                <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>

        )
};
