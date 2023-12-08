type PropsType = {
   itemPrice: number | null;
   currencyValue: number | undefined;
};

function PriceField({ itemPrice, currencyValue }: PropsType) {
   return (
      <div className="colConditionerCard__priceBody text-2xl font-medium">
         {itemPrice && currencyValue && (
            <p className="text-slate-600">
               Стоимость за единицу:{" "}
               <span className="text-neutral-800 font-semibold">{(itemPrice * currencyValue).toLocaleString()}</span>{" "}
               UZS
            </p>
         )}
      </div>
   );
}
export default PriceField;
