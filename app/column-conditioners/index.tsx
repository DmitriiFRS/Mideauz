import Image from "next/image";
import Link from "next/link";
import { ColListInner } from "./page";
import ItemList from "./ItemList";

type ConditionersList = {
   conditionerList: Array<ColListInner>;
   currencyValue: number;
};

function ConditionersList({ conditionerList, currencyValue }: ConditionersList) {
   return (
      <div className="col-conditioners container">
         <h2 className="col-conditioners__brandTitle text-center font-bold text-6xl text-slate-600">
            Колонные кондиционеры Midea и Welkin
         </h2>
         <ul className="col-conditioners__listItem grid grid-cols-2 gap-12 mt-14">
            <ItemList conditionerList={conditionerList} currencyValue={currencyValue} />
         </ul>
      </div>
   );
}
export default ConditionersList;
