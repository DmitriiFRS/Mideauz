"use client";

import { useEffect, useRef } from "react";
import { ModelTypeInner } from "./page";
import { useDispatch } from "react-redux";
import { addElem, setCurrentPower } from "@/app/Redux/Slices/items.slice";
import Image from "next/image";
import shevron from "../../../public/icons/option-down.svg";

type PropsType = {
   data: Array<ModelTypeInner>;
   details: string;
};

function SelectPowerInput({ data, details }: PropsType) {
   const dispatch = useDispatch();
   const selectRef = useRef<any>(null);
   useEffect(() => {
      let newData = data.slice();
      newData = newData
         .sort((a, b) => a.conditionerField.power - b.conditionerField.power)
         .filter((el) => {
            if (el.conditionerField.name.replace(/\s/g, "-") === details) {
               return true;
            }
         });
      dispatch(addElem(newData));
      dispatch(setCurrentPower(selectRef.current?.value));
   }, []);
   function getValue() {
      dispatch(setCurrentPower(selectRef.current?.value));
   }
   return (
      <div className="flex flex-col">
         <label htmlFor="conditionerPower" className=" text-2xl text-center">
            Мощность
         </label>
         <div className="conditionerCard__selectContainer relative">
            <select
               onChange={() => getValue()}
               name="powerSelect"
               id="conditionerPower"
               className="conditionerCard__select text-2xl w-full h-full appearance-none"
               ref={selectRef}
            >
               {data
                  .sort((a, b) => a.conditionerField.power - b.conditionerField.power)
                  .map((el, index) => {
                     if (el.conditionerField.name.replace(/\s/g, "-") === details) {
                        return <option key={index}>{el.conditionerField.power}</option>;
                     }
                  })}
            </select>
            <span className="conditionerCard__btuh">Btu/h</span>
            <div className="conditionerCard__arrowContainer absolute">
               <Image src={shevron} alt="" width={20} height={20} />
            </div>
         </div>
      </div>
   );
}
export default SelectPowerInput;
