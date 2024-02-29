"use client";
import { useEffect, useState } from "react";
import Loader from "../Utilities/Loader";
import "./air-conditioners.scss";
import ConditionersList from ".";

export type DataInner = {
   conditionerField: {
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
};

export type Data = {
   data: {
      conditioners: {
         nodes: Array<DataInner>;
      };
   };
};

function AirConditiones() {
   const [data, setData] = useState<null | Data>(null);
   const [currencyValue, setCurrencyValue] = useState<any>(null);
   useEffect(() => {
      fetch("http://wordpress/graphql", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify({
            query: `
            {
               conditioners(first: 999) {
                 nodes {
                   conditionerField {
                     name
                     power
                     cost
                     company
                     image {
                       node {
                         sourceUrl
                       }
                     }
                   }
                 }
               }
             }
               `,
         }),
      })
         .then((res) => res.json())
         .then((res) => setData(res));
      fetch("http://wordpress/graphql", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify({
            query: `
            query {
               currencyValues {
                 nodes {
                   dollarValue {
                     currencyValue
                   }
                 }
               }
             }
            `,
         }),
      })
         .then((res) => res.json())
         .then((res) => setCurrencyValue(res));
   }, []);
   return !data && !currencyValue ? (
      <Loader />
   ) : (
      <section className="flex-auto">
         <ConditionersList data={data} currencyValue={currencyValue} />
      </section>
   );
}
export default AirConditiones;
