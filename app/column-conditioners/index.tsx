import { ColListInner } from "./page";
import ItemList from "./ItemList";

type ConditionersList = {
   conditionerList: Array<ColListInner>;
   currencyValue: number;
   urlParam: string;
   itemsType: string;
   imgStyle: string;
};

function ConditionersList({ conditionerList, currencyValue, urlParam, itemsType, imgStyle }: ConditionersList) {
   return (
      <div className="col-conditioners container">
         <h2 className="col-conditioners__brandTitle text-center font-bold text-slate-600">{itemsType} Midea и Welkin</h2>
         <ul className="col-conditioners__listItem grid grid-cols-2 gap-12 mt-14">
            <ItemList urlParam={urlParam} conditionerList={conditionerList} currencyValue={currencyValue} imgStyle={imgStyle} />
         </ul>
      </div>
   );
}
export default ConditionersList;
