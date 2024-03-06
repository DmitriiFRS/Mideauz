import { ChangeEvent } from "react";
import { ModelType } from "./ItemListpage";

type PropsType = {
   getValue: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function ModeInput({ getValue }: PropsType) {
   return (
      <div className="flex items-center gap-8 ">
         <label htmlFor="columnParam" className="colConditionerCard__inputLabel text-xl font-medium">
            Тип
         </label>
         <div>
            <select
               onChange={(e) => getValue(e)}
               name="paramSelect"
               id="columnParam"
               className="colConditionerCard__count text-xl"
            >
               <option value={"Inverter"}>Inverter</option>
               <option value={"On/Off"}>On/Off</option>
            </select>
         </div>
      </div>
   );
}
export default ModeInput;
