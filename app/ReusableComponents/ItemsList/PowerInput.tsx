import { ChangeEvent } from "react";

type PropsType = {
   subInputRef: React.RefObject<HTMLSelectElement>;
   secondInput: Array<string>;
   changeSecondInput: (e: ChangeEvent<HTMLSelectElement>) => void;
};
function PowerInput({ subInputRef, secondInput, changeSecondInput }: PropsType) {
   return (
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
   );
}
export default PowerInput;
