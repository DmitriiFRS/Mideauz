"use client";

import { useDispatch, useSelector } from "react-redux";
import "../column-conditioners.scss";
import { useParams } from "next/navigation";
import { AppDispatch, RootState } from "@/app/Redux/store";
import { currencyValueData } from "@/app/Redux/Slices/main.slice";
import { useEffect, useState } from "react";
import { getConditionerItems } from "@/app/Redux/Slices/items.slice";
import Image from "next/image";
import Video from "./Video";
import SelectPowerInput from "./SelectPowerInput";

type ModelsType = {
   id: number;
   mode: Array<string>;
   power: string;
   price: string;
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

function Details() {
   const [model, setModel] = useState<null | ModelType>(null);
   const params = useParams();
   const dispatch = useDispatch<AppDispatch>();
   const goods = useSelector((state: RootState) => state.itemReducer.itemsList);
   useEffect(() => {
      dispatch(currencyValueData());
   }, [dispatch]);
   useEffect(() => {
      dispatch(getConditionerItems());
   }, [dispatch]);
   useEffect(() => {
      if (goods) {
         const newModel = goods.колонники.filter((el) => {
            return el.name.replace(/\s/g, "-") === params.Details;
         });
         setModel(newModel[0] as ModelType);
      }
   }, [goods]);
   return model ? (
      <div className="colConditionerCard container flex flex-col flex-auto">
         <div className="flex">
            <div className="colConditionerCard__imgBody relative">
               <Image src={model.img} alt={model.name} fill></Image>
            </div>
            <div className="flex flex-col justify-center">
               <p className="text-4xl font-semibold text-center">{model.name}</p>
               <SelectPowerInput model={model} />
            </div>
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
         <Video />
      </div>
   ) : (
      "null"
   );
}
export default Details;
