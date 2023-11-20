"use client";

import useLocalStorage from "@/app/hooks/useLocalStorage";
import { ModelType } from "./page";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/Redux/store";
import { setCartCount } from "@/app/Redux/Slices/main.slice";
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
   const dispatch = useDispatch<AppDispatch>();
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
   useEffect(() => {
      dispatch(setCartCount(value.length));
   }, [value]);
   return (
      <div className="conditionerCard__btnContainer mt-10">
         <button onClick={addItemToCart} className="btn-blue text-2x1">
            <span className="btn-blue-inner">Добавить в корзину</span>
         </button>
      </div>
   );
}
export default AddToCart;
