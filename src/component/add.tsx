"use client";

import { useState } from "react";

const Add = () => {
  const stock = 10;
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type: "d" | "i") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prep) => prep - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prep) => prep + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button onClick={() => handleQuantity("d")}>-</button>
            {quantity}
            <button onClick={() => handleQuantity("i")}>+</button>
          </div>
          <div>
            Only <span className="text-contrast_blue">10 items</span> left!{" "}
            <br /> {"Dont't"}
            {""} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-mette text-mette py-2 px-4 hover:bg-mette hover:text-white disabled:cursor-not-allowed transition-all ease-in duration-300 hover:scale-110 hover:shadow-xl hover:shadow-mette ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
