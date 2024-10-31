
import './App.css'
import Header from './components/Header/Header'
import LoveProduct from './components/LoveProduct/LoveProduct'
import ContentProduct from './components/ContentProduct/ContentProduct'
import ModalAdd from './components/Modal/ModalAdd'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailPage from './pages/DetailPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: ":productId",
    element: <DetailPage />,
    // element: <App />,
    // children: [
    //   {
    //     path: ":userId",
    //     element: <UserDetail />,
    //   }
    // ]
  },
]);

function App() {
 
  return (
    // <div className=''>
    //      <HomePage />
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App
