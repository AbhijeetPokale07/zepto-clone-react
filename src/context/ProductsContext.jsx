import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log(data);
    
  }, []);

  return (
    <ProductsContext.Provider value={{ data }}>
      {children}
    </ProductsContext.Provider>
  );
};
