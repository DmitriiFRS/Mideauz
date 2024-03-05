"use client";

import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { AppDispatch } from "@/app/Redux/store";
import { currencyValueData } from "@/app/Redux/Slices/main.slice";
import { useEffect, useState } from "react";
import Image from "next/image";
import SelectPowerInput from "./SelectPowerInput";
import Video from "../Video";
import "../../column-conditioners/column-conditioners.scss";
import ItemAddedToCart from "../ItemAddedToCart";
import { ColModelTypeInner } from "@/app/Types/Col.type";
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
}: {
   items: Array<ColModelTypeInner>;
   currencyValue: number;
   hrefName: string;
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
                        <div className="colConditionerCard__imgBody relative">
                           <Image src={el.col.image.node.sourceUrl} alt={el.col.name} fill></Image>
                        </div>
                        <div className="flex flex-col justify-center">
                           <p className="text-4xl font-semibold">{el.col.name}</p>
                           <SelectPowerInput
                              model={el}
                              currencyValue={currencyValue}
                              items={items}
                              hrefName={hrefName}
                           />
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

/*
const [model, setModel] = useState<null | ModelType>(null);
   const [isInProgress, setProgress] = useState<boolean>(false);
   const params = useParams();
   useEffect(() => {
      if (items) {
         const newModel = items.filter((el) => {
            return el.name.replace(/\s/g, "-") === params.Details;
         });
         setModel(newModel[0] as ModelType);
      }
      console.log(items);
   }, [items]);
   return model ? (
      <div className="colConditionerCard container flex flex-col flex-auto">
         <ItemAddedToCart isInProgress={isInProgress} />
         <div className="colConditionerCard__body grid">
            <div className="colConditionerCard__imgBody relative">
               <Image src={model.img} alt={model.name} fill></Image>
            </div>
            <div className="flex flex-col justify-center">
               <p className="text-4xl font-semibold">{model.name}</p>
               <SelectPowerInput model={model} setProgress={setProgress} />
            </div>
            <Video />
         </div>
         <div className="colConditionerCard__descBody grid mt-28">
            <div className="text-slate-600">
               <h4 className="text-center text-2xl font-semibold">Описание</h4>
               <p className="colConditionerCard__desc mt-10">{model.desc}</p>
            </div>
            <div className="text-slate-600">
               <h4 className="text-2xl font-semibold">Параметры</h4>
               <ul className="colConditionerCard__advantages mt-10 ">
                  {model.params.map((el, index) => {
                     return (
                        <li key={index} className="list-disc">
                           {el}
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </div>
   ) : (
      "null"
   );
*/
