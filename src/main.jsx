import React from "react";
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter , createHashRouter,RouterProvider } from 'react-router-dom'
import DataContext from './pages/DataContext'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/product__detail',
    element: <ProductDetail />
  },
])

function App() {

  const [itemstoProduct, setItemstoProduct] = useState([]);
  const showProduct = (newItemsProduct) => {
    setItemstoProduct(() => [newItemsProduct]);
  }

  const [itemsToCart, setItemstoCart] = useState([]);
  const sentItems = (newItem) => {
    setItemstoCart((prevItem) => [...prevItem, newItem])
  }

  useEffect(() => {
    console.log('Items To Product: ', itemstoProduct);
    console.log('Itrms To Cart: ', itemsToCart)
  }, [itemstoProduct, itemsToCart]) 

  return (
    <DataContext.Provider value={{ itemstoProduct, showProduct,  itemsToCart, sentItems }}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  )
}

export default App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
