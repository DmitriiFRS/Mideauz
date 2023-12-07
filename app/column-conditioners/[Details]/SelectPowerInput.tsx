import { ChangeEvent, useEffect, useState } from "react";
import { ModelType } from "./page";

type PropsType = {
   model: ModelType;
};
function SelectPowerInput({ model }: PropsType) {
   const [firstInput, setFirstInput] = useState<string>("Inverter");
   const [secondInput, setSecondInput] = useState<Array<string>>([]);
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
   useEffect(() => {
      const secondInputArr: Array<string> = [];
      model.models.forEach((el) => {
         if (el.mode.length === 2 || el.mode[0] === firstInput) {
            secondInputArr.push(el.power);
         }
      });
      setSecondInput(secondInputArr);
   }, []);
   return (
      <div className="colConditionerCard__selectBody mt-8">
         {model.mode ? (
            <>
               <div className="flex items-center gap-8">
                  <label htmlFor="columnParam" className="colConditionerCard__inputLabel text-xl font-medium">
                     Режим
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
                  <select name="powerSelect" id="columnPower" className="colConditionerCard__count text-xl">
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
                  <input id="columnCount" type="number" className="colConditionerCard__count text-xl" />
               </div>
               <div className="colConditionerCard__priceBody text-2xl font-medium">
                  <p>
                     Стоимость за единицу: <span>99999999</span> UZS
                  </p>
               </div>
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
