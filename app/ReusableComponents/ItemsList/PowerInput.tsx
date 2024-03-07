import { ChangeEvent } from "react";
import Image from "next/image";
import shevron from "../../../public/icons/option-down.svg";

type PropsType = {
   subInputRef: React.RefObject<HTMLSelectElement>;
   secondInput: Array<string>;
   changeSecondInput: (e: ChangeEvent<HTMLSelectElement>) => void;
};
function PowerInput({ subInputRef, secondInput, changeSecondInput }: PropsType) {
   return (
      <div className="colConditionerCard__inputBody flex items-center gap-8">
         <label htmlFor="columnPower" className="colConditionerCard__inputLabel text-xl font-medium">
            Мощность
         </label>
         <div className="selectContainer">
            <select
               ref={subInputRef}
               name="powerSelect"
               id="columnPower"
               className="select"
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
            <span className="select-btuh">Btu/h</span>
            <div className="select-arrowContainer">
               <Image src={shevron} alt="" width={20} height={20} />
            </div>
         </div>
      </div>
   );
}
export default PowerInput;
