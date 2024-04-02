import ConditionersList from "../column-conditioners/index";
import "../column-conditioners/column-conditioners.scss";
import fetchGraphqlData from "../Utilities/FetchGraphql";
import { Metadata } from "next/types";

export const metadata: Metadata = {
   title: "Канальные кондиционеры",
   description: "Каталог канальных бытовых и полупромышленных кондиционеров Midea & Welkin",
   keywords: ["Канальный кондер", "Канальник", "Канальный кондиционер", "Канал"],
};

const urlParam = "ducted-conditioners";
const itemsType = "Канальные кондиционеры";
const imgStyle = "duct-conditioners__imgBody";

async function DuctedConditioners() {
   const data = await fetchGraphqlData(`
   query {
      ductConditioners(first: 99) {
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
            conditionerList={data.data.ductConditioners.nodes}
            urlParam={urlParam}
            itemsType={itemsType}
            imgStyle={imgStyle}
         />
      </section>
   );
}
export default DuctedConditioners;
