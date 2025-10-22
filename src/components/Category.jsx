import React from "react";
import { getData } from "../context/ProductsContext";

const Category = () => {
  const { data } = getData();

  // console.log('data',data);

  const getCategories = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categories = getCategories(data, "category");

  return (
    <div>
      {categories?.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
      ;
    </div>
  );
};

export default Category;
