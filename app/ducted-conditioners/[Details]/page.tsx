import ItemListpage from "@/app/ReusableComponents/ItemsList/ItemListpage";
import { DuctFetchData } from "@/app/Types/Col.type";
import fetchGraphqlData from "@/app/Utilities/FetchGraphql";

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

export async function generateStaticParams() {
   const data = await fetchGraphqlData(`
 {
  ductConditioners(first: 99) {
      nodes {
        col {
          name
        }
      }
    }
  }
 `);
   return data.data.ductConditioners.nodes.map((el: GenerateParams) => ({
      Details: el.col.name.replace(/\s/g, "-"),
   }));
}

async function Details({ params }: { params: { Details: string } }) {
   const data: DuctFetchData = await fetchGraphqlData(`
   query {
      ductConditioners(first: 99) {
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
         items={data.data.ductConditioners.nodes}
         currencyValue={data.data.currencyValues.nodes[0].dollarValue.currencyValue}
         hrefName={params.Details}
         itemType="Канальный кондиционер"
         imgStyle="duct-conditioners__imgBody"
      />
   );
}
export default Details;
