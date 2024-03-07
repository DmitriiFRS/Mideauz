import { ChangeEvent } from "react";
import shevron from "../../../public/icons/option-down.svg";
import Image from "next/image";

type PropsType = {
   getValue: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function ModeInput({ getValue }: PropsType) {
   return (
      <div className="flex items-center gap-8 ">
         <label htmlFor="columnParam" className="colConditionerCard__inputLabel text-xl font-medium">
            Тип
         </label>
         <div className="selectContainer">
            <select onChange={(e) => getValue(e)} name="paramSelect" id="columnParam" className="select">
               <option value={"Inverter"}>Inverter</option>
               <option value={"On/Off"}>On/Off</option>
            </select>
            <div className="select-arrowContainer">
               <Image src={shevron} alt="" width={20} height={20} />
            </div>
         </div>
      </div>
   );
}
export default ModeInput;
