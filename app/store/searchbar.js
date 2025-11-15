'use client';
import React, {useState, useEffect} from "react";


export default function SearchBar(props) {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const filteredProducts = props.products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    return(
        <div>
            <input 
             id='searchbar' 
             type="text" 
             className="searchbar"
             placeholder='Search for something already!'
             value={searchValue}
             onChange={handleInputChange}
               />
            
            <div className='product-grid'>
                {filteredProducts.map((product) => (
                    <div key={product.title} className='product-card'>
                        <img src={product.image}></img>
                        <h3>{product.title}</h3>
                        <p>{product.category}</p>
                        <div className='price'>
                            <p>${product.price}</p>
                        </div>
                        <p>{product.description}</p>
                        <div className="rating">
                            <p>Rating: {product.rating.rate} / 5</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}