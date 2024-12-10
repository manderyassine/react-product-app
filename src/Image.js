import React from 'react';
import product from './product';

function Image() {
  return <img 
    src={product.imageUrl} 
    alt={product.name} 
    className="product-image" 
    style={{maxWidth: '300px', borderRadius: '10px'}} 
  />;
}

export default Image;
