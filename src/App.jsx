
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
     
      {/* <Modal /> */}
    </div>
  )
}

export default App
