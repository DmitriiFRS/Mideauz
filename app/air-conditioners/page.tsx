import { Suspense, useEffect, useState } from "react";
import Loader from "../Utilities/Loader";
import "./air-conditioners.scss";
import ConditionersList from ".";
import fetchGraphqlData from "../Utilities/FetchGraphql";
import { ConditionersFetchData } from "../Types/Col.type";

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

async function AirConditiones() {
   const data: ConditionersFetchData = await fetchGraphqlData(`
   query {
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
      currencyValues {
        nodes {
          dollarValue {
            currencyValue
          }
        }
      }
    }
   `);
   return (
      <section className="flex-auto">
         <Suspense fallback={<Loader />}>
            <ConditionersList
               data={data.data.conditioners.nodes}
               currencyValue={data.data.currencyValues.nodes[0].dollarValue.currencyValue}
            />
         </Suspense>
      </section>
   );
}
export default AirConditiones;
