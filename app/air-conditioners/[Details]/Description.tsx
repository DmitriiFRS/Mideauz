type ParamsPropsType = {
   itemParams: Array<string>;
   itemOtherParams: Array<string>;
   isFadeOut: boolean;
};

function Description({ itemParams, itemOtherParams, isFadeOut }: ParamsPropsType) {
   return (
      <div className="conditionerCard__desc">
         <h2 className="text-3xl text-slate-800">Параметры</h2>
         <ul className={`${isFadeOut ? "conditionerCard__desc__hide" : ""} conditionerCard__descList mt-10`}>
            {itemParams.map((el, index) => {
               return (
                  <li key={index} className="conditionerCard__descItem text-slate-600 text-lg">
                     {`-${el}`}
                  </li>
               );
            })}
         </ul>
         <div className="conditionerCard__other mt-10">
            <h2 className="text-4xl text-slate-800">Подробнее</h2>
            <ul className={`${isFadeOut ? "conditionerCard__desc__hide" : ""} conditionerCard__descList mt-10`}>
               {itemOtherParams.map((el, index) => {
                  return <li key={index} className="conditionerCard__descItem text-slate-600 text-lg">{`${el}`}</li>;
               })}
            </ul>
         </div>
      </div>
   );
}
export default Description;
