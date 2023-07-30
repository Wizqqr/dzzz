import React from 'react';
import '../images/Images.css'

const Images = (propsTop) => {
const{image}=propsTop
    return (
        <div className='Images'>
            <img src={image} alt="" />
        </div>
    );
}

export default Images;
