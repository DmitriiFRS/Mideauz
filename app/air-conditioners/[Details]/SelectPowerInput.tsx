"use client";

import { ChangeEvent, LegacyRef, Ref, useEffect, useRef } from "react";
import { ModelType, ModelTypeInner, ModelsType } from "./page";
import { useDispatch } from "react-redux";
import { addElem, setCurrentPower } from "@/app/Redux/Slices/items.slice";

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
   function getValue(e: ChangeEvent<HTMLSelectElement>) {
      dispatch(setCurrentPower(selectRef.current?.value));
   }
   return (
      <div className="flex flex-col">
         <label htmlFor="conditionerPower" className=" text-2xl">
            Мощность
         </label>
         <select
            onChange={(e) => getValue(e)}
            name="powerSelect"
            id="conditionerPower"
            className="conditionerCard__select mt-5 text-2xl"
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
      </div>
   );
}
export default SelectPowerInput;
