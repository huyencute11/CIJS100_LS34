import { createContext, useState } from "react";
import {dataProducts} from  '../MockData';

// trong context này chứa toàn bộ state global của ứng dụng
export const StoreContext = createContext({
    products: dataProducts,
    setProducts(newProducts) { 
        
    }
});

const StoreProvider = ({ children }) => {
    // thuc hien cac chuc nang filter 
    const [products, setProducts] = useState(dataProducts);
    // truyền state và dispatch xuống dưới
    return <StoreContext.Provider value={
        {
            products: products,
            setProducts: (newProducts) => {
                setProducts(newProducts);
            }
        }
    }>{children}</StoreContext.Provider>;
}

export default StoreProvider;

