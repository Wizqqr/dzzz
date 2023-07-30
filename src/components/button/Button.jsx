import React from 'react';
import '../button/Button.css'

const Button = (props) => {
    const{text, OnClick}=props
    function handleClick() {
        alert('You clicked me!');
    }
    return (
        <div className="Start">
        <div className="Button">
            <button className="Btn" onClick={handleClick}>
            <h1 className="text">{text}</h1>
            <p className="OnClick">{OnClick}</p>
            </button>
        </div>
        </div>
    );
}

export default Button;