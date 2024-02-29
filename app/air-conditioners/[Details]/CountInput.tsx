"use client";

import { setItemCount } from "@/app/Redux/Slices/items.slice";
import { RootState } from "@/app/Redux/store";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

function CountInput() {
   const itemCount = useSelector((state: RootState) => state.itemReducer.itemCount);
   const dispatch = useDispatch();
   function addCount(e: ChangeEvent<HTMLInputElement>) {
      if (e.target.value === "0") return 1;
      dispatch(setItemCount(e.target.value));
   }
   return (
      <div className="conditionerCount__modpowBody flex flex-col ml-10">
         <label htmlFor="conditionerCount" className="text-2xl">
            Количество
         </label>
         <input
            id="conditionerCount"
            value={itemCount}
            onChange={(e) => addCount(e)}
            type="number"
            className="conditionerCard__input text-2xl mt-5"
         />
      </div>
   );
}
export default CountInput;
