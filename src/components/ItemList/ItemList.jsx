import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { db } from '../../firebase/firebaseConfig';  // Firebase configuration

const ItemListContainer = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const productsSnapshot = await db.collection('products').get();
      const productsList = productsSnapshot.docs.map(doc => doc.data());
      setProducts(productsList);
    };
    
    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
