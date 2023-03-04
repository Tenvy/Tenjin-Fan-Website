import React , { useState } from "react";
import { CardList } from "./CardList";
import { ModalCard } from "./ModalCard";

export const Product = (props) => {
  const [focusedProduct, setFocusedProduct] = useState(null);
  return (
    <div id="product" className="z-[1] flex flex-col h-screen items-center">
      <div className="flex flex-col items-center mt-20 py-10">
        <h1 className="font-bold text-3xl md:text-4xl">OUR PRODUCTS</h1>
        <div className="bg-white h-[1px] w-[60%] flex my-3">
        </div>
      </div>
      <div className="w-[70%]">
        <CardList product={props.product} setFocusedProduct={setFocusedProduct}/>
        <ModalCard focusedProduct={focusedProduct} setFocusedProduct={setFocusedProduct} />
      </div>
    </div>
  );
};
