import ProductDetail from '@/page-components/products/product-detail'
import { getBookFromId, getData } from '@/utils/fetchData'
import React from 'react'

const ProductDetails = ({ product }) => {
  return (
    <div>
    
    <ProductDetail product={product} />
    </div>
  )
}

export default ProductDetails

export async function getServerSideProps({params: {id}}) {
    const product = await getBookFromId(`product/${id}`)

    return{
        props: {
          product
        },
    }
}