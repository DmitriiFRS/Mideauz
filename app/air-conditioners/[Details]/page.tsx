import fetchGraphqlData from "@/app/Utilities/FetchGraphql";
import Image from "next/image";
import CountInput from "./CountInput";
import SelectPowerInput from "./SelectPowerInput";
import CostPerUnit from "./CostPerUnit";
import AddToCart from "./AddToCart";
import "../air-conditioners.scss";
import Description from "./Description";
import About from "./About";

export type ModelsType = {
   details: Array<string>;
   params: Array<string>;
   power: string;
   price: string;
   id: number;
};
export type ModelType = {
   company: string;
   img: string;
   models: Array<ModelsType>;
   name: string;
};

export type ModelTypeInner = {
   id: string;
   conditionerField: {
      name: string;
      power: number;
      cost: string;
      coolingOutput: string | null;
      heatOutput: string | null;
      energyOutput: string | null;
      areaCube: string | null;
      areaQuad: string | null;
      indoorNoiseLevel: string | null;
      outdoorNoiseLevel: string | null;
      company: Array<string>;
      description1: string;
      description2: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

async function Details({ params }: { params: { Details: string } }) {
   const data = await fetchGraphqlData(`
   {
      conditioners(first: 999) {
        nodes {
         id
          conditionerField {
            name
            power
            cost
            coolingOutput
            heatOutput
            energyOutput
            areaCube
            areaQuad
            indoorNoiseLevel
            outdoorNoiseLevel
            company
            description1
            description2
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
   let flag = false;
   return (
      <div className="conditionerCard container">
         {data.data.conditioners.nodes.map((el: ModelTypeInner, index: number) => {
            if (el.conditionerField.name.replace(/\s/g, "-") === params.Details && !flag) {
               flag = true;
               return (
                  <div key={index} className="conditionerCard__mainBody flex flex-col">
                     <h2 className="conditionerCard__mainBody__title text-slate-700">Кондиционер настенного типа</h2>
                     <div className="conditionerCard__img_optionsContainer">
                        <div className="conditionerCard__img relative">
                           <Image
                              src={el.conditionerField.image.node.sourceUrl}
                              alt={el.conditionerField.name}
                              fill={true}
                              priority={true}
                           />
                        </div>
                        <div className="conditionerCard__main flex flex-col">
                           <h3 className="conditionerCard__modelTitle text-5xl">{el.conditionerField.name}</h3>
                           <div className="conditionerCard__optionContainer flex mt-10">
                              <SelectPowerInput data={data.data.conditioners.nodes} details={params.Details} />
                              <CountInput />
                           </div>
                           <CostPerUnit currencyData={data.data.currencyValues.nodes[0].dollarValue.currencyValue} />
                           <AddToCart />
                        </div>
                     </div>
                     <About />
                     <Description />
                  </div>
               );
            }
         })}
      </div>
   );
}
export default Details;
