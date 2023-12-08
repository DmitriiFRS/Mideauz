import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ModelType } from "./page";
import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
import AddToCart from "./AddToCart";

type PropsType = {
   model: ModelType;
   setProgress: Function;
};
function SelectPowerInput({ model, setProgress }: PropsType) {
   const [firstInput, setFirstInput] = useState<string>("Inverter");
   const [secondInput, setSecondInput] = useState<Array<string>>([]);
   const [itemPrice, setItemPrice] = useState<number | null>(null);
   const [countValue, setCount] = useState<number>(1);
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
   const subInputRef = useRef<HTMLSelectElement>(null);
   function getValue(e: ChangeEvent<HTMLSelectElement>) {
      setFirstInput(e.target.value);
      const secondInputArr: Array<string> = [];
      model.models.forEach((el) => {
         if (el.mode.length === 2 || el.mode[0] === e.target.value) {
            secondInputArr.push(el.power);
         }
      });
      setSecondInput(secondInputArr);
   }
   function changeSecondInput(e: ChangeEvent<HTMLSelectElement>) {
      if (subInputRef) {
         model.models.find((el) => {
            if (el.power === subInputRef.current?.value) {
               setItemPrice(+el.price);
            }
         });
      }
   }
   useEffect(() => {
      if (model.mode) {
         const secondInputArr: Array<string> = [];
         model.models.forEach((el) => {
            if (el.mode.length === 2 || el.mode[0] === firstInput) {
               secondInputArr.push(el.power);
            }
         });
         setSecondInput(secondInputArr);
      }
   }, []);
   useEffect(() => {
      if (subInputRef) {
         model.models.find((el) => {
            if (el.power === subInputRef.current?.value) {
               setItemPrice(+el.price);
            }
         });
      }
   }, [secondInput]);
   function addCount(e: ChangeEvent<HTMLInputElement>) {
      if (e.target.value === "0") return 1;
      setCount(parseInt(e.target.value));
   }
   return (
      <div className="colConditionerCard__selectBody mt-8 text-slate-600">
         {model.mode ? (
            <>
               <div className="flex items-center gap-8 ">
                  <label htmlFor="columnParam" className="colConditionerCard__inputLabel text-xl font-medium">
                     Тип
                  </label>
                  <select
                     onChange={(e) => getValue(e)}
                     name="paramSelect"
                     id="columnParam"
                     className="colConditionerCard__count text-xl"
                  >
                     {model.mode.map((el, index) => {
                        return (
                           <option key={index} value={el}>
                              {el}
                           </option>
                        );
                     })}
                  </select>
               </div>
               <div className="flex items-center gap-8">
                  <label htmlFor="columnPower" className="colConditionerCard__inputLabel text-xl font-medium">
                     Мощность
                  </label>
                  <select
                     ref={subInputRef}
                     name="powerSelect"
                     id="columnPower"
                     className="colConditionerCard__count text-xl"
                     onChange={(e) => changeSecondInput(e)}
                  >
                     {secondInput.map((el, index) => {
                        return (
                           <option key={index} value={el}>
                              {el}
                           </option>
                        );
                     })}
                  </select>
               </div>
               <div className="colConditionerCard__inputLineBody flex items-center gap-8">
                  <label htmlFor="columnCount" className="colConditionerCard__inputLabel text-xl font-medium">
                     Количество
                  </label>
                  <input
                     value={countValue}
                     onChange={(e) => addCount(e)}
                     id="columnCount"
                     type="number"
                     className="colConditionerCard__count text-xl"
                  />
               </div>
               <div className="colConditionerCard__priceBody text-2xl font-medium">
                  {itemPrice && currencyValue && (
                     <p className="text-slate-600">
                        Стоимость за единицу:{" "}
                        <span className="text-neutral-800 font-semibold">
                           {(itemPrice * currencyValue).toLocaleString()}
                        </span>{" "}
                        UZS
                     </p>
                  )}
               </div>
               <AddToCart
                  setProgress={setProgress}
                  colModel={model}
                  firstInput={firstInput}
                  subInputRef={subInputRef}
                  countValue={countValue}
               />
            </>
         ) : (
            <div className="">
               <label htmlFor="columnPower"></label>
               <select name="powerSelect" id="columnPower"></select>
            </div>
         )}
      </div>
   );
}
export default SelectPowerInput;
