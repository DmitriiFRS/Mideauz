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
      <div className="">
         {model.mode ? (
            <>
               <div className="">
                  <label htmlFor="columnParam"></label>
                  <select onChange={(e) => getValue(e)} name="paramSelect" id="columnParam">
                     {model.mode.map((el, index) => {
                        return (
                           <option key={index} value={el}>
                              {el}
                           </option>
                        );
                     })}
                  </select>
               </div>
               <div className="">
                  <label htmlFor="columnPower"></label>
                  <select name="powerSelect" id="columnPower">
                     {secondInput.map((el, index) => {
                        return (
                           <option key={index} value={el}>
                              {el}
                           </option>
                        );
                     })}
                  </select>
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
