type PropsType = {
   itemPrice: number | null;
   currencyValue: number | undefined;
};

function PriceField({ itemPrice, currencyValue }: PropsType) {
   return (
      <div className="colConditionerCard__priceBody text-2xl font-medium">
         {itemPrice && currencyValue && (
            <p className="colConditionerCard__price text-slate-600">
               Стоимость за единицу:{" "}
               <span className=" text-neutral-800 font-semibold">
                  {(Number(itemPrice) * currencyValue).toLocaleString() + " " + "UZS"}
               </span>
            </p>
         )}
      </div>
   );
}
export default PriceField;
