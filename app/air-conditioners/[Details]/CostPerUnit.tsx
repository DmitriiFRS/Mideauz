"use client";

import { RootState } from "@/app/Redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentEl } from "@/app/Redux/Slices/items.slice";

function CostPerUnit({ currencyData }: { currencyData: number }) {
   const items = useSelector((state: RootState) => state.itemReducer.conditionerEl);
   const power = useSelector((state: RootState) => state.itemReducer.currentPower);
   const currentItem = useSelector((state: RootState) => state.itemReducer.currentEl);
   const dispatch = useDispatch();
   useEffect(() => {
      if (power && items) {
         items.forEach((el) => {
            if (el.conditionerField.power === +power) {
               dispatch(setCurrentEl(el));
            }
         });
      }
   }, [power, items]);
   return (
      currentItem && (
         <div className="conditionerCard__priceContainer">
            <div className="conditionerCard__price mt-10 text-2xl">
               Стоимость за единицу:{" "}
               <span>{(+currentItem.conditionerField.cost * currencyData).toLocaleString() + " UZS"}</span>
            </div>
         </div>
      )
   );
}
export default CostPerUnit;
