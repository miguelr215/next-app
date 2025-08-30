import React from 'react'
import AddToCart from '../AddToCart/AddToCart'
import DaisyBtn from '../DaisyBtn/DaisyBtn'

const ProductCard = () => {
  return (
    <div className='h-32 bg-green-200'>
      <p>ProductCard</p>
      <AddToCart />
      <DaisyBtn />
    </div>
  )
}

export default ProductCard