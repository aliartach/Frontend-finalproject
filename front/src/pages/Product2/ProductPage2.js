import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPage2.css';
import Navbarmain from '../../components/Navbarmain/Navbarmain';
import Footer from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';


const ProductPage2 = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAllProducts();
        fetchAllCategories();
    }, []);

    useEffect(() => {
        filterProductsByCategory();
    }, [selectedCategoryId]);

    console.log("product",products[0])
    const filterProductsByCategory = () => {
        if (selectedCategoryId) {
            const filtered = products.filter(product => product.categoryID._id === selectedCategoryId);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    };

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get(`https://backend-finalproject-fb9a.onrender.com/api/product`);
            setProducts(response.data);
            setFilteredProducts(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching product details:', error.message);
            setError('Error fetching product details');
        }
    };

    const fetchAllCategories = async () => {
        try {
            const response = await axios.get(`https://backend-finalproject-fb9a.onrender.com/api/category`);
            setCategories(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching categories:', error.message);
            setError('Error fetching categories');
        }
    };

    const selectProduct = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };

    return (
        <div className="productPage">
            <Navbarmain />
            <div className='productpagecontent'>
                <div className="sidebar">
                    <h3>Categories</h3>
                    <div className="productSelection">
                        
                        <button 
                            className={`filteredbuttonall ${selectedCategoryId === null ? 'active' : ''}`} 
                            onClick={() => selectProduct(null)}
                        >
                            All
                        </button>
                        {categories.map(category => (
                            <button 
                                key={category._id} 
                                className={`filteredbutton ${selectedCategoryId === category._id ? 'active' : ''}`} 
                                onClick={() => selectProduct(category._id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="product-list">
                    {error && <div key="error" className="error-message">{error}</div>}
                    {filteredProducts.map(product => (
                        <Link className='Link' to={`/Singleproduct/${product._id}`}>
                            <div key={product._id} className="productItem">
                                <img  crossorigin='anonymous' src={`https://backend-finalproject-fb9a.onrender.com/${product.image}`} className='productimage' alt={product.productName} />

                                <h6>{product.productName}</h6>
                                {/* <p>{product.description}</p> */}
                                <p>${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductPage2;
