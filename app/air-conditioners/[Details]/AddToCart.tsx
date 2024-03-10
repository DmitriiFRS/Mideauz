"use client";

import useLocalStorage from "@/app/hooks/useLocalStorage";
import { ModelType } from "./page";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/Redux/store";
import { setCartCount } from "@/app/Redux/Slices/main.slice";
type AddToCartPropsType = {
   model: ModelType;
   optionValue: number;
   count: number;
   setProgress?: Function;
};

type NewItem = {
   model: string;
   power: number;
   price: string;
   count: number;
   id: string;
   img: string;
};

function AddToCart() {
   const dispatch = useDispatch<AppDispatch>();
   const [value, setValue] = useLocalStorage<any>("item", []);
   const currentEl = useSelector((state: RootState) => state.itemReducer.currentEl);
   const count = useSelector((state: RootState) => state.itemReducer.itemCount);
   function addItemToCart() {
      let flag = false;
      const newValue = value;
      if (currentEl) {
         const newItem: NewItem = {
            model: `Кондиционер ${currentEl.conditionerField.name}`,
            power: currentEl.conditionerField.power,
            price: currentEl.conditionerField.cost,
            count: count,
            id: currentEl.id,
            img: currentEl.conditionerField.image.node.sourceUrl,
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
