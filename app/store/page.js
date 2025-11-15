'use client';
import Head from "next/head";
import React, {useState, useEffect} from "react";
import styles from "../page.module.css";
import SearchBar from "./searchbar.js";



export default function Store() {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())            
            .then((productsArray) => setProductsState(productsArray));
    }, [])

    const hasProducts = productsState.length > 0;
    return(
        <>
        <div className={styles.fakeStore}>
            <h1>Fake Store</h1>
            <p>Welcome to Jack's Fake Store!</p>
            <p>Try using the search bar.</p>
            {hasProducts ? <SearchBar products={productsState}/> : <p>Loading...</p>}
        </div>
        <div className={styles.container}>
            <div className="item"></div>
        </div>
        </>
    );
};