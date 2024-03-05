import React from 'react'
import "./SingleProductComponent.css"
// import whitechocolate from "../../assets/whitechocolatebar.jpg"
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';





const SingleProductComponent = () => {

  const [product, setProduct] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  let { id } = useParams();


  useEffect(() => {
    fetchsingleproduct();
  }, []);

  const fetchsingleproduct = async () => {
    try {
        const response = await axios.get(`https://backend-finalproject-fb9a.onrender.com/api/product/${id}`);
        setProduct(response.data.product);
        console.log("-------",response.data.product)
      
    } catch (error) {
        console.error('Error fetching product details:', error.message);
  
    }
};

const handleIncrease = () => {
 
  if (selectedQuantity < product.quantity) {
    setSelectedQuantity(selectedQuantity + 1);
  }

};

const handleDecrease = () => {
  if (selectedQuantity > 1) {
    setSelectedQuantity(selectedQuantity - 1);
  }
};

const addToCart = () => {
  
  if ( selectedQuantity) {
    const cartItem = {
      product_id: product._id,
      price: product.price,
   
      quantity: selectedQuantity,
      image: product.image,
      name:product.productName
    };
    let existingCartItems =
      JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemExists = false;
    existingCartItems = existingCartItems.map((item) => {
      if (
        item.product_id === cartItem.product_id 
      
      ) {
        cartItemExists = true;
        return {
          ...item,
          quantity: item.quantity + cartItem.quantity,
        };
      }
      return item;
    });
    if (!cartItemExists) {
      existingCartItems.push(cartItem);
    }
    localStorage.setItem("cart", JSON.stringify(existingCartItems));

    window.location.reload()


  } 
};



  return (
    <div className='singleproductcomponent'>
      <div className='imgproductcontainer'>
      <img  crossorigin='anonymous' src={`https://backend-finalproject-fb9a.onrender.com/${product.image}`} className='productimage1' alt={product.productName} />
      </div>

      <div className='productdescription'>
        <p className='singleproductname'>{product.productName}</p>
        <p className='singleproductprice'>Price: ${product.price}</p>
        <p>Weight: {product.weight}</p>
        <p>Type: {product.type}</p>

        <p className='singleproductdescription'>Description: {product.description}</p>

        <div className='addtocartbuttons'>
            <div className='tteerr'>
              <button onClick={handleIncrease} className='addbutton'>+</button>
              <p>{selectedQuantity}</p>
              <button onClick={handleDecrease} className='removebutton'>-</button>
            </div>

            <div>
              <button onClick={addToCart} className='addtocartbutton'>add to cart</button>
            </div>

        </div>

      </div>
    </div>
  )
}

export default SingleProductComponent
