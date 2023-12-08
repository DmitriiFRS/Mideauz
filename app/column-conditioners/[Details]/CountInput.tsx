import { ChangeEvent } from "react";

type PropsType = {
   countValue: number;
   addCount: (e: ChangeEvent<HTMLInputElement>) => void;
};

function CountInput({ countValue, addCount }: PropsType) {
   return (
      <div className="colConditionerCard__inputLineBody flex items-center gap-8">
         <label htmlFor="columnCount" className="colConditionerCard__inputLabel text-xl font-medium">
            Количество
         </label>
         <input
            value={countValue}
            onChange={(e) => addCount(e)}
            id="columnCount"
            type="number"
            className="colConditionerCard__count text-xl"
         />
      </div>
   );
}
export default CountInput;
