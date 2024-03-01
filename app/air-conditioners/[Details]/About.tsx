"use client";

import { RootState } from "@/app/Redux/store";
import { useSelector } from "react-redux";

function About() {
   const currentEl = useSelector((state: RootState) => state.itemReducer.currentEl);
   return (
      currentEl && (
         <div className="conditionerCard__about text-slate-600">
            <p className="conditionerCard__aboutBody">{currentEl.conditionerField.description1}</p>
            {currentEl.conditionerField.description2 && (
               <p className="conditionerCard__aboutBody">{currentEl.conditionerField.description2}</p>
            )}
         </div>
      )
   );
}
export default About;
