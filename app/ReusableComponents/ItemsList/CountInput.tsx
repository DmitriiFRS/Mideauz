import { ChangeEvent } from "react";

type PropsType = {
   countValue: number;
   addCount: (e: ChangeEvent<HTMLInputElement>) => void;
   isDirty: boolean;
   setDirty: (bool: boolean) => void;
};

function CountInput({ countValue, addCount, isDirty, setDirty }: PropsType) {
   return (
      <div className="colConditionerCard__inputLineBody flex items-center gap-8">
         <label htmlFor="columnCount" className="colConditionerCard__inputLabel text-xl font-medium">
            Количество
         </label>
         <div className={`selectContainer ${isDirty ? "selectContainer__error" : ""}`}>
            <input
               onFocus={() => setDirty(false)}
               value={countValue}
               onChange={(e) => addCount(e)}
               id="columnCount"
               type="number"
               className="select"
            />
         </div>
      </div>
   );
}
export default CountInput;
