import { LegacyRef } from "react";
import { ModelType, ModelsType } from "./page";

type PropsType = {
   getValue: Function;
   model: ModelType;
};

function SelectPowerInput({ getValue, model }: PropsType) {
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
         >
            {model.models.map((el: ModelsType, index: number) => {
               return (
                  <option key={index} value={index}>
                     {el.power}
                  </option>
               );
            })}
         </select>
      </div>
   );
}
export default SelectPowerInput;
