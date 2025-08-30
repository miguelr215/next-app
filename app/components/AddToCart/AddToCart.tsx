'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div className='p-3'>
        <button onClick={() => console.log('clicked')} className='p-2 border rounded border-black hover:bg-sky-300 hover:border-green-900 transition-all duration-600'>Add to Cart</button>
    </div>
  )
}

export default AddToCart