import "./column-conditioners.scss";
import fetchGraphqlData from "../Utilities/FetchGraphql";
import ConditionersList from ".";

export type ColListInner = {
   col: {
      name: string;
      company: Array<string>;
      areaCube: string;
      areaQuad: string;
      coolantCapacity: string;
      coolingOutput: string;
      cost: number;
      description: string;
      heatOutput: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      indoorNoiseLevel: string;
      outdoorNoiseLevel: string;
      power: Array<string>;
      temperatureRange: string;
   };
};

export type ColList = {
   data: {
      data: {
         colConditioners: {
            nodes: Array<ColListInner>;
         };
      };
   };
};
async function ColumnConditioners() {
   const data = await fetchGraphqlData(`
   query {
      colConditioners(first: 99) {
        nodes {
          col {
            name
            company
            areaCube
            areaQuad
            coolantCapacity
            coolingOutput
            cost
            description
            heatOutput
            image {
              node {
                sourceUrl
              }
            }
            indoorNoiseLevel
            outdoorNoiseLevel
            power
            temperatureRange
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
         <ConditionersList
            currencyValue={data.data.currencyValues.nodes[0].dollarValue.currencyValue}
            conditionerList={data.data.colConditioners.nodes}
         />
      </section>
   );
}
export default ColumnConditioners;

/*
{brands.map((el, index) => {
            return (
               <ConditionersList
                  key={index}
                  conditionerList={index === 0 ? conditionerList.list[0].midea : conditionerList.list[1].welkin}
                  brands={brands[index]}
               />
            );
         })}
*/
