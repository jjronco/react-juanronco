import React from 'react';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container text-center py-5" style={{ backgroundColor: '#101010', color: 'whitesmoke' }}>
      <h2 style={{ color: '#c70039' }}>{mensaje}</h2>
    </div>
  );
};

export default ItemListContainer;
