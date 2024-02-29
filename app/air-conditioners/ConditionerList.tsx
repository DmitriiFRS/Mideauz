import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type ConditionerListProps = {
   ref: React.RefObject<HTMLUListElement>;
   conditionerList: any;
};

function ConditionerList({ conditionerList, currencyValue, brand, isHide }: any) {
   const dollarVal = currencyValue.data.currencyValues.nodes[0].dollarValue.currencyValue;
   return (
      <ul className={`${isHide ? "conditioners__list__unactive" : ""} conditioners__list grid mt-14`}>
         {conditionerList.map((el: any, index: number) => {
            return (
               <Link key={index} href={`/air-conditioners/${el.name.replace(/\s/g, "-")}`}>
                  <li
                     style={{ transitionDelay: index / 6 + "s" }}
                     className={`conditioners__item flex flex-col text-center items-center py-6`}
                  >
                     <div className="conditioners__img-container relative flex items-center justify-center z-0">
                        <Image className="conditioners__img" src={el.image.node.sourceUrl} alt={el.name} fill={true} />
                     </div>
                     <div className="flex flex-col">
                        <p className="conditioners__itemTitle font-medium relative z-10">{el.name}</p>
                        {currencyValue ? (
                           <span className="conditioners__itemPriceTitle mt-5 inline-block">
                              от {(+el.cost * dollarVal).toLocaleString()} UZS
                           </span>
                        ) : (
                           ""
                        )}
                     </div>
                     <button className="conditioners__btn mt-10">Выбрать параметры</button>
                  </li>
               </Link>
            );
         })}
      </ul>
   );
}
export default ConditionerList;

/*
{currencyValue ? (
                           <span className="conditioners__itemPriceTitle mt-5 inline-block">
                              от {(el.price * currencyValue).toLocaleString()} UZS
                           </span>
                        ) : (
                           ""
                        )}
                        */
