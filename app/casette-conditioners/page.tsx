import fetchGraphqlData from "../Utilities/FetchGraphql";
import "../column-conditioners/column-conditioners.scss";
import ConditionersList from "../column-conditioners/index";

const urlParam = "casette-conditioners";
const itemsType = "Кассетные кондиционеры";
const imgStyle = "cas-conditioners__imgBody";

async function CasetteConditioners() {
   const data = await fetchGraphqlData(`
   query {
      casConditioners(first: 99) {
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
            type
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
            conditionerList={data.data.casConditioners.nodes}
            urlParam={urlParam}
            itemsType={itemsType}
            imgStyle={imgStyle}
         />
      </section>
   );
}
export default CasetteConditioners;
