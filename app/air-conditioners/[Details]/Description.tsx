import { LegacyRef } from "react";

type ParamsPropsType = {
  selectRef: LegacyRef<HTMLSelectElement>;
  itemParams: Array<string>;
  itemOtherParams: Array<string>;
};

function Description({
  selectRef,
  itemParams,
  itemOtherParams,
}: ParamsPropsType) {
  return (
    <div className="conditionerCard__desc mt-10 py-5 flex flex-col">
      <h2 className="text-4xl">Характеристики</h2>
      <ul className="conditionerCard__descList mt-10">
        {itemParams.map((el, index) => {
          return (
            <li key={index} className="conditionerCard__descItem text-xl">
              {`-${el}`}
            </li>
          );
        })}
      </ul>
      <div className="conditionerCard__other mt-10">
        <h2 className="text-4xl">Подробнее</h2>
        <ul className="conditionerCard__descList mt-10">
          {itemOtherParams.map((el, index) => {
            return (
              <li
                key={index}
                className="conditionerCard__descItem text-xl"
              >{`-${el}`}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Description;
