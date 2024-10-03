import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import LoveProduct from './components/LoveProduct/LoveProduct'
import ContentProduct from './components/ContentProduct/ContentProduct'

function App() {

  return (
    <div className='container'>
      <Header />
      <LoveProduct />
      <ContentProduct />
    </div>
  )
}

export default App
