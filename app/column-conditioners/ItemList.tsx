"use client";

import { useEffect, useState } from "react";
import { ColListInner } from "./page";
import Loader from "../Utilities/Loader";
import Link from "next/link";
import Image from "next/image";
type ConditionersList = {
   urlParam: string;
   conditionerList: Array<ColListInner>;
   currencyValue: number;
   imgStyle: string;
};

function ItemList({ urlParam, conditionerList, currencyValue, imgStyle }: ConditionersList) {
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
               <Link key={index} href={`/${urlParam}/${el.col.name.replace(/\s|\//g, "_")}`}>
                  <li
                     key={index}
                     className="col-conditioners__li flex flex-col justify-center text-center items-center"
                  >
                     <div className={`relative flex items-center justify-center ${imgStyle}`}>
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
