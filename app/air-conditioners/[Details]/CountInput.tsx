import { ChangeEvent } from "react";

function CountInput({ count, setCount }: { count: number; setCount: Function }) {
   function addCount(e: ChangeEvent<HTMLInputElement>) {
      if (e.target.value === "0") return 1;
      setCount(parseInt(e.target.value));
   }
   return (
      <div className="conditionerCount__modpowBody flex flex-col ml-10">
         <label htmlFor="conditionerCount" className="text-2xl">
            Количество
         </label>
         <input
            id="conditionerCount"
            value={count}
            onChange={(e) => addCount(e)}
            type="number"
            className="conditionerCard__input text-2xl mt-5"
         />
      </div>
   );
}
export default CountInput;
