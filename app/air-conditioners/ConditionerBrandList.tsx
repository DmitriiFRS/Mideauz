import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ConditionerList from "./ConditionerList";
import { DataInner } from "./page";

function ConditionerBrandList({ brand, conditionerList, currencyValue }: { brand: string; conditionerList: Array<DataInner>; currencyValue: any }) {
   const [isHide, setHide] = useState<boolean>(false);
   function toggleBlock() {
      setHide(!isHide);
   }
   return (
      <div className="conditioners">
         <div className="flex items-center justify-center">
            <h2 className="conditioners__brandTitle text-center font-bold text-slate-600">Настенные кондиционеры {brand}</h2>
            <button onClick={toggleBlock} className={` conditioners__hideBtn ${isHide ? "conditioners__hide" : ""}`}>
               <MdOutlineArrowDropDown className={`${"conditioners__ArrowDropDownActive"}`} style={{ color: "#475569" }} />
            </button>
         </div>
         <ConditionerList conditionerList={conditionerList} isHide={isHide} currencyValue={currencyValue} brand={brand} />
      </div>
   );
}
export default ConditionerBrandList;
