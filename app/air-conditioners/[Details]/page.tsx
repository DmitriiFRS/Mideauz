"use client";

import { getConditionerItems } from "@/app/Redux/Slices/items.slice";
import { AppDispatch, RootState } from "@/app/Redux/store";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import "../air-conditioners.scss";
import SelectPowerInput from "./SelectPowerInput";
import CountInput from "./CountInput";
import AddToCart from "./AddToCart";
import Description from "./Description";
import { currencyValueData } from "@/app/Redux/Slices/main.slice";

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

function Details() {
   const params = useParams();
   const [model, setModel] = useState<any>(null);
   const [count, setCount] = useState<number>(1);
   const [optionValue, setValue] = useState(0);
   const [itemParams, setItemParams] = useState([]);
   const [itemOtherParams, setItemOtherParams] = useState([]);
   const selectRef = useRef<HTMLSelectElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const goods = useSelector((state: RootState) => state.itemReducer.itemsList);
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
   const error = useSelector((state: RootState) => state.itemReducer.error);
   useEffect(() => {
      dispatch(currencyValueData());
   }, [dispatch]);

   useEffect(() => {
      dispatch(getConditionerItems());
   }, [dispatch]);

   useEffect(() => {
      if (goods) {
         const newModel = goods.кондиционеры.filter((el) => {
            return el.name === params.Details;
         });
         setModel(newModel[0]);
      }
   }, [goods]);
   useEffect(() => {
      if (selectRef.current) {
         setItemParams(model.models[optionValue].params);
         setItemOtherParams(model.models[optionValue].details);
      }
   }, [optionValue, itemParams, model]);
   function getValue(e: ChangeEvent<HTMLSelectElement>) {
      setValue(parseInt(e.target.value));
   }

   return model ? (
      <div className="conditionerCard container">
         <div className="conditionerCard__mainBody flex mt-20">
            <div className="conditionerCard__img relative">
               <Image src={model.img} alt={model.name} fill={true} />
            </div>
            <div className="conditionerCard__main flex flex-col mt-10 py-5">
               <h2 className="text-5xl text-center">{model.name}</h2>
               <h4 className="mt-10 text-2xl text-center">
                  {model.models[0].price + "UZS"} -{model.models[model.models.length - 1].price + "UZS"}
               </h4>
               <div className="flex mt-10">
                  <SelectPowerInput selectRef={selectRef} getValue={getValue} model={model} />
                  <CountInput count={count} setCount={setCount} />
               </div>
               {currencyValue ? (
                  <div className="conditionerCard__price mt-10 text-2xl text-center">
                     {(model.models[optionValue].price * currencyValue).toLocaleString() + " UZS"}
                  </div>
               ) : (
                  ""
               )}

               <AddToCart model={model} optionValue={optionValue} count={count} currencyValue={currencyValue} />
            </div>
            <Description selectRef={selectRef} itemParams={itemParams} itemOtherParams={itemOtherParams} />
         </div>
      </div>
   ) : (
      <div>skeleton</div>
   );
}
export default Details;
