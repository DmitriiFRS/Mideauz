"use client";

import { useEffect, useState } from "react";
import { ColListInner } from "./page";
import Loader from "../Utilities/Loader";
import Link from "next/link";
import Image from "next/image";
type ConditionersList = {
   conditionerList: Array<ColListInner>;
   currencyValue: number;
};

function ItemList({ conditionerList, currencyValue }: ConditionersList) {
   const [filteredData, setFilteredData] = useState<null | Array<ColListInner>>(null);
   useEffect(() => {
      const lowerPower = conditionerList.slice();
      const uniqueData: Array<ColListInner> = [];
      lowerPower
         .sort((a, b) => Number(a.col.power[0]) - Number(b.col.power[0]))
         .filter((el) => {
            if (!uniqueData.find((tempEl) => tempEl.col.name === el.col.name)) {
               uniqueData.push(el);
            }
         });
      setFilteredData(uniqueData);
   }, []);
   return filteredData ? (
      <>
         {filteredData.map((el, index) => {
            return (
               <Link key={index} href={`/column-conditioners/${el.col.name.replace(/\s|\//g, "_")}`}>
                  <li
                     key={index}
                     className="col-conditioners__li flex flex-col justify-center text-center items-center"
                  >
                     <div className={`relative flex items-center justify-center col-conditioners__imgBody`}>
                        <Image src={el.col.image.node.sourceUrl} alt={el.col.name} fill={true} />
                     </div>
                     <div className="col-conditioners__paramsList flex flex-col mt-10 justify-between">
                        <p className="col-conditioners__paramsTitle font-medium relative z-10">{el.col.name}</p>
                        <span className="col-conditioners__paramsPrice text-xl mt-5 inline-block ">
                           от {(el.col.cost * currencyValue).toLocaleString()} UZS
                        </span>
                        <span className="col-conditioners__paramsSub text-xl mt-5 inline-block ">{el.col.company}</span>
                     </div>
                     <button className="col-conditioners__btn mt-10">Выбрать параметры</button>
                  </li>
               </Link>
            );
         })}
      </>
   ) : (
      <Loader />
   );
}
export default ItemList;
/*
{conditionerList.map((el: any, index: number) => {
            return (
               <Link key={index} href={`/column-conditioners/${el.href}`}>
                  <li
                     key={index}
                     className="col-conditioners__li flex flex-col justify-center text-center items-center"
                  >
                     <div className={`relative flex items-center justify-center z-0`}>
                        <Image src={el.img} alt={el.name} fill={true} />
                     </div>
                     <div className="col-conditioners__paramsList flex flex-col mt-10 justify-between">
                        <p className="col-conditioners__paramsTitle font-medium relative z-10">{el.name}</p>
                        <span className=" text-2xl mt-5 inline-block">{el.subname}</span>
                        <span className="col-conditioners__paramsPrice text-xl mt-5 inline-block ">
                           от {el.price.toLocaleString()} UZS
                        </span>
                        <span className="col-conditioners__paramsSub text-xl mt-5 inline-block ">{el.title}</span>
                     </div>
                     <button className="col-conditioners__btn mt-10">Выбрать параметры</button>
                  </li>
               </Link>
            );
         })}
*/
