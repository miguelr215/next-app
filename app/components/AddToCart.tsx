'use client';
import React from 'react'
import styles from './ProductCard/ProductCard.module.css'

const AddToCart = () => {
  return (
    <div className={styles.card}>
        <button onClick={() => console.log('clicked')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart