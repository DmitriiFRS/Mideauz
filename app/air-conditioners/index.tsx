"use client";

import { useEffect, useState } from "react";
import "./air-conditioners.scss";
import ConditionerBrandList from "./ConditionerBrandList";
import { Data, DataInner } from "./page";

const brands = ["Midea", "Welkin"];
type DataParams = {
   company: Array<string>;
   cost: string;
   name: string;
   power: number;
   image: {
      node: {
         sourceUrl: string;
      };
   };
};

function ConditionersList({ data, currencyValue }: { data: Data | null; currencyValue: any }) {
   const [mideaData, setMideaData] = useState<Array<DataInner>>([]);
   const [welkinData, setWelkinData] = useState<Array<DataInner>>([]);
   useEffect(() => {
      if (data) {
         const uniqueData: Array<any> = [[], []];
         const tempWelkinData: Array<any> = [];
         data.data.conditioners.nodes.forEach((el) => {
            if (el.conditionerField.company[0] === brands[0] && !uniqueData[0].includes(brands[0])) {
               if (!uniqueData[0].find((tempEl: DataParams) => tempEl.name === el.conditionerField.name)) {
                  uniqueData[0].push(el.conditionerField);
               }
            } else {
               if (!uniqueData[1].find((tempEl: DataParams) => tempEl.name === el.conditionerField.name)) {
                  uniqueData[1].push(el.conditionerField);
               }
            }
         });
         setMideaData(uniqueData[0]);
         setWelkinData(uniqueData[1]);
      }
   }, [data]);
   return (
      <>
         <ConditionerBrandList brand={brands[0]} conditionerList={mideaData} currencyValue={currencyValue} />
         <ConditionerBrandList brand={brands[1]} conditionerList={welkinData} currencyValue={currencyValue} />
      </>
   );
}
export default ConditionersList;
//<ConditionerList conditionerList={conditionerList} isHide={isHide} currencyValue={currencyValue} />
