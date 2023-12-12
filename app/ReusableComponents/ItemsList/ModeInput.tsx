import { ChangeEvent } from "react";
import { ModelType } from "./ItemListpage";

type PropsType = {
   getValue: (e: ChangeEvent<HTMLSelectElement>) => void;
   model: ModelType;
};

function ModeInput({ getValue, model }: PropsType) {
   return (
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
            {model.mode?.map((el, index) => {
               return (
                  <option key={index} value={el}>
                     {el}
                  </option>
               );
            })}
         </select>
      </div>
   );
}
export default ModeInput;
