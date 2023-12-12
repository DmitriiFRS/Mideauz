import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
import ModeInput from "./ModeInput";
import PowerInput from "./PowerInput";
import CountInput from "./CountInput";
import PriceField from "./PriceField";
import AddToCart from "./AddToCart";

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
   model: ModelType;
};
function SelectPowerInput({ model }: PropsType) {
   const [firstInput, setFirstInput] = useState<string>("Inverter");
   const [secondInput, setSecondInput] = useState<Array<string>>([]);
   const [itemPrice, setItemPrice] = useState<number | null>(null);
   const [countValue, setCount] = useState<number>(1);
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
   const subInputRef = useRef<HTMLSelectElement>(null);

   /* функция, которая меняет значения второго инпута на основании значения в первом инпуте */
   function getValue(e: ChangeEvent<HTMLSelectElement>) {
      setFirstInput(e.target.value);
      const secondInputArr: Array<string> = [];
      model.models.forEach((el) => {
         if ((el.mode && el.mode.length === 2) || (el.mode && el.mode[0] === e.target.value)) {
            secondInputArr.push(el.power);
         }
      });
      setSecondInput(secondInputArr);
   }

   /* функция для расчета стоимости товара при изменении инпута мощности */
   function changeSecondInput(e: ChangeEvent<HTMLSelectElement>) {
      if (subInputRef) {
         model.models.find((el) => {
            if (el.power === subInputRef.current?.value) {
               if (el.InverterPrice && firstInput === "Inverter") {
                  setItemPrice(+el.InverterPrice);
               } else {
                  setItemPrice(+el.price);
               }
            }
         });
      }
   }

   /* Инициализация второго инпута если есть первый или если его нет */
   useEffect(() => {
      const secondInputArr: Array<string> = [];
      if (model.mode) {
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
         setSecondInput(secondInputArr);
      }
   }, []);

   /* расчет стоимости товара */
   useEffect(() => {
      if (subInputRef) {
         model.models.find((el) => {
            if (el.power === subInputRef.current?.value) {
               if (el.InverterPrice && firstInput === "Inverter") {
                  setItemPrice(+el.InverterPrice);
               } else {
                  setItemPrice(+el.price);
               }
            }
         });
      }
   }, [secondInput]);

   /* функция, которая ререндерит количество товаров в корзине */
   function addCount(e: ChangeEvent<HTMLInputElement>) {
      if (e.target.value === "0") return 1;
      setCount(parseInt(e.target.value));
   }

   /* рендер компонента в котором есть инпут с типом или в котором есть только один инпут с мощностью */
   return (
      <div className="colConditionerCard__selectBody mt-8 text-slate-600">
         {model.mode ? (
            <>
               <ModeInput getValue={getValue} model={model} />
               <PowerInput subInputRef={subInputRef} secondInput={secondInput} changeSecondInput={changeSecondInput} />
               <CountInput countValue={countValue} addCount={addCount} />
               <PriceField itemPrice={itemPrice} currencyValue={currencyValue} />
               <AddToCart colModel={model} firstInput={firstInput} subInputRef={subInputRef} countValue={countValue} />
            </>
         ) : (
            <>
               <PowerInput subInputRef={subInputRef} secondInput={secondInput} changeSecondInput={changeSecondInput} />
               <CountInput countValue={countValue} addCount={addCount} />
               <PriceField itemPrice={itemPrice} currencyValue={currencyValue} />
               <AddToCart colModel={model} firstInput={firstInput} subInputRef={subInputRef} countValue={countValue} />
            </>
         )}
      </div>
   );
}
export default SelectPowerInput;
