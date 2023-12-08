import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ModelType } from "./page";
import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
import AddToCart from "./AddToCart";
import PowerInput from "./PowerInput";
import ModeInput from "./ModeInput";
import CountInput from "./CountInput";
import PriceField from "./PriceField";

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
      const secondInputArr: Array<string> = [];
      if (model.mode) {
         model.models.forEach((el) => {
            if (el.mode.length === 2 || el.mode[0] === firstInput) {
               secondInputArr.push(el.power);
            }
         });
         setSecondInput(secondInputArr);
      } else {
         model.models.forEach((el) => {
            secondInputArr.push(el.power);
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
               <ModeInput getValue={getValue} model={model} />
               <PowerInput subInputRef={subInputRef} secondInput={secondInput} changeSecondInput={changeSecondInput} />
               <CountInput countValue={countValue} addCount={addCount} />
               <PriceField itemPrice={itemPrice} currencyValue={currencyValue} />
               <AddToCart
                  setProgress={setProgress}
                  colModel={model}
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
                  setProgress={setProgress}
                  colModel={model}
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
