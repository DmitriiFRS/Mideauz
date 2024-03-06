import Image from "next/image";
import SelectPowerInput from "./SelectPowerInput";
import "../../column-conditioners/column-conditioners.scss";
import { ColModelTypeInner } from "@/app/Types/Col.type";
import ModelParams from "./ModelParams";
type ModelsType = {
   id: number;
   mode?: Array<string>;
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

function ItemListpage({
   items,
   currencyValue,
   hrefName,
   itemType,
   imgStyle,
}: {
   items: Array<ColModelTypeInner>;
   currencyValue: number;
   hrefName: string;
   itemType: string;
   imgStyle: string;
}) {
   let flag = false;
   return (
      <div>
         {items.map((el, index) => {
            if (el.col.name.replace(/\s|\//g, "_") === hrefName && !flag) {
               flag = true;
               return (
                  <div key={index} className="colConditionerCard container flex flex-col flex-auto">
                     <div className="colConditionerCard__body grid">
                        <h2 className="colConditionerCard__title text-4xl font-semibold text-center">
                           {itemType} {el.col.name} {el.col.company}
                        </h2>
                        <div className="colConditionerCard__mainBody flex justify-between">
                           <div className={`colConditionerCard__imgBody ${imgStyle} relative mt-14`}>
                              <Image src={el.col.image.node.sourceUrl} alt={el.col.name} fill></Image>
                           </div>
                           <div className="colConditionerCard__select flex flex-col mt-14">
                              <SelectPowerInput currencyValue={currencyValue} items={items} hrefName={hrefName} />
                           </div>
                        </div>

                        <div className="colConditionerCard__descBody flex flex-col mt-20">
                           <div className="text-slate-600 max-w-6xl">
                              <h4 className="text-center text-2xl font-semibold">Описание</h4>
                              <p className="colConditionerCard__desc mt-10">{el.col.description}</p>
                           </div>
                           <div className="colConditionerCard__paramBody text-slate-600 w-full mt-20 py-6">
                              <h4 className="text-2xl font-semibold text-center">Основные параметры</h4>
                              <ModelParams />
                           </div>
                        </div>
                     </div>
                  </div>
               );
            }
         })}
      </div>
   );
}
export default ItemListpage;
