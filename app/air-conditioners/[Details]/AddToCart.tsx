"use client";

import useLocalStorage from "@/app/hooks/useLocalStorage";
import { ModelType } from "./page";
import { useEffect, useState } from "react";
type AddToCartPropsType = {
   model: ModelType;
   optionValue: number;
   count: number;
   currencyValue: number | undefined;
};

type NewItem = {
   model: string;
   power: string;
   price: string;
   count: number;
   id: number;
};

function AddToCart({ model, optionValue, count, currencyValue }: AddToCartPropsType) {
   const [value, setValue] = useLocalStorage<any>("item", []);
   function addItemToCart() {
      let flag = false;
      const newValue = value;
      const newItem: NewItem = {
         model: model.name,
         power: model.models[optionValue].power,
         price: model.models[optionValue].price,
         count: count,
         id: model.models[optionValue].id,
      };
      value.forEach((el: NewItem, index: number) => {
         if (el.model === newItem.model && el.power === newItem.power) {
            flag = true;
            newValue[index].count += count;
         }
      });
      if (flag) {
         setValue([...newValue]);
      } else {
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
