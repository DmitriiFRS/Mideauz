"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
import ModeInput from "./ModeInput";
import PowerInput from "./PowerInput";
import CountInput from "./CountInput";
import PriceField from "./PriceField";
import AddToCart from "./AddToCart";
import { ColModelTypeInner } from "@/app/Types/Col.type";

type ModelsType = {
   id: number;
   mode?: Array<string>;
   power: string;
   price: string;
   InverterPrice?: string;
};

export type ModelType = {
   company: string;
   desc: string;
   img: string;
   models: Array<ModelsType>;
   name: string;
   params: Array<string>;
   mode?: Array<string>;
};

type PropsType = {
   model: ColModelTypeInner;
   items: Array<ColModelTypeInner>;
   currencyValue: number;
   hrefName: string;
};
function SelectPowerInput({ model, items, currencyValue, hrefName }: PropsType) {
   const [inverterPower, setInverterPower] = useState<null | Array<string>>(null);
   const [onoffPower, setOnoffPower] = useState<null | Array<string>>(null);
   const [firstInput, setFirstInput] = useState<string>("Inverter");
   const [secondInput, setSecondInput] = useState<Array<string>>([]);
   const [itemPrice, setItemPrice] = useState<number | null>(null);
   const [countValue, setCount] = useState<number>(1);
   const [currentItems, setCurrentItems] = useState<null | Array<ColModelTypeInner>>(null);
   const subInputRef = useRef<HTMLSelectElement>(null);

   /* функция, которая меняет значения второго инпута на основании значения в первом инпуте */
   function getValue(e: ChangeEvent<HTMLSelectElement>) {
      if (e.target.value === "Inverter" && inverterPower) {
         setSecondInput(inverterPower);
      } else {
         onoffPower && setSecondInput(onoffPower);
      }
      setFirstInput(e.target.value);
      /*setProgress(false);
      setFirstInput(e.target.value);
      const secondInputArr: Array<string> = [];
      model.models.forEach((el) => {
         if ((el.mode && el.mode.length === 2) || (el.mode && el.mode[0] === e.target.value)) {
            secondInputArr.push(el.power);
         }
      });
      setSecondInput(secondInputArr);*/
   }

   /* функция для расчета стоимости товара при изменении инпута мощности */
   function changeSecondInput(e: ChangeEvent<HTMLSelectElement>) {
      //setProgress(false);
      if (subInputRef && currentItems && inverterPower && onoffPower) {
         currentItems.find((el) => {
            console.log(subInputRef.current?.value);
            console.log(el.col.power[0]);
            if (el.col.power[0] === subInputRef.current?.value && el.col.type[0] === firstInput) {
               setItemPrice(+el.col.cost);
               return true;
            }
         });
      }
      if (subInputRef && currentItems) {
         currentItems.find((el) => {
            if (el.col.power[0] === subInputRef.current?.value) {
               setItemPrice(+el.col.cost);
               return true;
            }
         });
      }
   }

   /* Инициализация и разделение инпутов Inverter и onoff */
   useEffect(() => {
      const inverterArr: Array<string> = [];
      const onoffArr: Array<string> = [];
      const itemsCopy = items
         .slice()
         .filter((el) => {
            return el.col.name.replace(/\s|\//g, "_") === hrefName;
         })
         .sort((a, b) => Number(a.col.power) - Number(b.col.power));
      setCurrentItems(itemsCopy);
      itemsCopy.forEach((el) => {
         if (el.col.type[0] === "Inverter") {
            inverterArr.push(el.col.power[0]);
         } else {
            onoffArr.push(el.col.power[0]);
         }
      });
      if (inverterArr.length > 0) {
         setInverterPower(inverterArr);
         setSecondInput(inverterArr);
      }
      if (onoffArr.length > 0) {
         setOnoffPower(onoffArr);
         setSecondInput(onoffArr);
      }
      /*const secondInputArr: Array<string> = [];
         model.models.forEach((el) => {
            if ((el.mode && el.mode.length === 2) || (el.mode && el.mode[0] === firstInput)) {
               secondInputArr.push(el.power);
            }
         });
         setSecondInput(secondInputArr);
      } else {
         model.models.forEach((el) => {
            secondInputArr.push(el.power);
         });
         setSecondInput(secondInputArr);*/
   }, []);

   /* расчет стоимости товара */
   useEffect(() => {
      if (subInputRef && currentItems && inverterPower && onoffPower) {
         currentItems.find((el) => {
            if (el.col.power[0] === subInputRef.current?.value && el.col.type[0] === firstInput) {
               setItemPrice(+el.col.cost);
               return true;
            }
         });
      } else if (subInputRef && currentItems) {
         currentItems.find((el) => {
            if (el.col.power[0] === subInputRef.current?.value) {
               setItemPrice(+el.col.cost);
               return true;
            }
         });
      }
   }, [secondInput, firstInput]);

   /* функция, которая ререндерит количество товаров в корзине */
   function addCount(e: ChangeEvent<HTMLInputElement>) {
      if (e.target.value === "0") return 1;
      setCount(parseInt(e.target.value));
   }
   /* рендер компонента в котором есть инпут с типом или в котором есть только один инпут с мощностью */
   return (
      <div className="colConditionerCard__selectBody mt-8 text-slate-600">
         {inverterPower && onoffPower ? (
            <>
               <ModeInput getValue={getValue} />
               <PowerInput subInputRef={subInputRef} secondInput={secondInput} changeSecondInput={changeSecondInput} />
               <CountInput countValue={countValue} addCount={addCount} />
               <PriceField itemPrice={itemPrice} currencyValue={currencyValue} />
               <AddToCart
                  currentItems={currentItems}
                  firstInput={firstInput}
                  subInputRef={subInputRef}
                  countValue={countValue}
               />
            </>
         ) : (
            <>
               <PowerInput subInputRef={subInputRef} secondInput={secondInput} changeSecondInput={changeSecondInput} />
               <CountInput countValue={countValue} addCount={addCount} />
               <PriceField itemPrice={itemPrice} currencyValue={currencyValue} />
               <AddToCart
                  currentItems={currentItems}
                  firstInput={firstInput}
                  subInputRef={subInputRef}
                  countValue={countValue}
               />
            </>
         )}
      </div>
   );
}
export default SelectPowerInput;
