import Image from "next/image";
import Link from "next/link";
import React from "react";

type ConditionerListProps = {
   ref: React.RefObject<HTMLUListElement>;
   conditionerList: any;
};

function ConditionerList({ conditionerList, currencyValue, isHide }: any) {
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
                        <Image className="conditioners__img" src={el.img} alt={el.name} fill={true} />
                     </div>
                     <div className="flex flex-col">
                        <p className="conditioners__itemTitle font-medium relative z-10">{el.name}</p>
                        <span className="conditioners__itemSubtitle mt-5 inline-block">{el.sub}</span>
                        {currencyValue ? (
                           <span className="conditioners__itemPriceTitle mt-5 inline-block">
                              от {(el.price * currencyValue).toLocaleString()} UZS
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
