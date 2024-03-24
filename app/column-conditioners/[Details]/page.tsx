import fetchGraphqlData from "@/app/Utilities/FetchGraphql";
import "../column-conditioners.scss";
import ItemListpage from "@/app/ReusableComponents/ItemsList/ItemListpage";
import { ColFetchData } from "@/app/Types/Col.type";

type ModelsType = {
   id: number;
   mode: Array<string>;
   power: string;
   price: string;
   InverterPrice?: string;
};

export type ModelType = {
   company: string;
   desc: string;
   img: string;
   models: Array<ModelsType>;
   name: string;
   params: Array<string>;
   mode?: Array<string>;
};

type GenerateParams = {
   col: {
      name: string;
   };
};

async function Details({ params }: { params: { Details: string } }) {
   const data: ColFetchData = await fetchGraphqlData(`
   query {
    colConditioners(first: 99) {
      nodes {
        id
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
      <ItemListpage
         items={data.data.colConditioners.nodes}
         currencyValue={data.data.currencyValues.nodes[0].dollarValue.currencyValue}
         hrefName={params.Details}
         itemType="Колонный кондиционер"
         imgStyle="col-conditioners__imgBody"
      />
   );
}
export default Details;
