"use client";

import useLocalStorage from "@/app/hooks/useLocalStorage";
import { ModelType } from "./page";
import { useEffect, useState } from "react";
type AddToCartPropsType = {
   model: ModelType;
   optionValue: number;
   count: number;
};

type NewItem = {
   model: string;
   power: string;
   price: string;
   count: number;
};

function AddToCart({ model, optionValue, count }: AddToCartPropsType) {
   const [value, setValue] = useLocalStorage<any>("item", []);
   function addItemToCart() {
      let flag = false;
      const newValue = value;
      const newItem: NewItem = {
         model: model.name,
         power: model.models[optionValue].power,
         price: model.models[optionValue].price,
         count: count,
      };
      value.forEach((el: NewItem, index: number) => {
         if (el.model === newItem.model && el.power === newItem.power) {
            flag = true;
            newValue[index].count += count;
         }
      });
      if (flag) {
         console.log("if", flag);
         setValue([...newValue]);
      } else {
         console.log("else", flag);
         setValue([...newValue, newItem]);
      }
   }
   console.log(model);
   return (
      <div className="conditionerCard__btnContainer mt-10">
         <button onClick={addItemToCart} className="conditionerCard__submit text-2x1 ml-5">
            Добавить в корзину
         </button>
      </div>
   );
}
export default AddToCart;
