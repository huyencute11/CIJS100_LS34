import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import LoveProduct from './components/LoveProduct/LoveProduct'
import ContentProduct from './components/ContentProduct/ContentProduct'
import Modal from './components/Modal/Modal'

function App() {

  return (
    <div className='container'>
      {/* <Header />
      <LoveProduct />
      <ContentProduct /> */}
      <Modal />
    </div>
  )
}

export default App
