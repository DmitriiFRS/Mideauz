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
import Video from "./Video";
import { FaCheckCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import CartSkeleton from "@/app/Utilities/CartSkeleton";

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
   const [isInProgress, setProgress] = useState<boolean>(false);
   const [isFadeOut, setFadeEffect] = useState<boolean>(false);
   useEffect(() => {
      dispatch(currencyValueData());
   }, [dispatch]);

   useEffect(() => {
      dispatch(getConditionerItems());
   }, [dispatch]);

   useEffect(() => {
      if (goods) {
         const newModel = goods.кондиционеры.filter((el) => {
            return el.name.replace(/\s/g, "-") === params.Details;
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
      setProgress(false);
      setFadeEffect(true);
      setTimeout(() => {
         setValue(parseInt(e.target.value));
         setFadeEffect(false);
      }, 200);
   }

   return model ? (
      <div className="conditionerCard container">
         <div
            className={`conditionerCard__order ${
               isInProgress ? "conditionerCard__order__active" : ""
            } w-full h-20 mt-20 flex items-center justify-between text-2xl px-10 font-medium`}
         >
            <FaCheckCircle style={{ height: "40px", width: "40px", color: "#08eb00" }} />
            <h4 className="ml-16 text-slate-800">Товар добавлен в корзину</h4>
            <Link href={"/cart"} className="conditionerCard__goToCart flex items-center h-full">
               <p className="mr-3">Перейти в корзину</p>
               <FaLongArrowAltRight
                  className="conditionerCard__goToCart__arrow"
                  style={{ height: "30px", width: "30px", color: "#343E4E" }}
               />
            </Link>
         </div>
         <div className="conditionerCard__mainBody grid mt-10">
            <div className="conditionerCard__img relative">
               <Image src={model.img} alt={model.name} fill={true} />
            </div>
            <div className="conditionerCard__main flex flex-col mt-10 py-5">
               <h2 className="text-5xl">{model.name}</h2>
               <h4 className="mt-10 text-2xl">
                  {(currencyValue && model.models[0].price * currencyValue)?.toLocaleString() + " UZS"}
                  {" - "}
                  {(currencyValue && model.models[model.models.length - 1].price * currencyValue)?.toLocaleString() +
                     " UZS"}
               </h4>
               <div className="flex mt-10">
                  <SelectPowerInput selectRef={selectRef} getValue={getValue} model={model} />
                  <CountInput count={count} setCount={setCount} />
               </div>
               {currencyValue ? (
                  <div className="conditionerCard__price mt-10 text-2xl">
                     {(model.models[optionValue].price * currencyValue).toLocaleString() + " UZS"}
                  </div>
               ) : (
                  ""
               )}

               <AddToCart setProgress={setProgress} model={model} optionValue={optionValue} count={count} />
            </div>
            <Description isFadeOut={isFadeOut} itemParams={itemParams} itemOtherParams={itemOtherParams} />
            <Video />
         </div>
      </div>
   ) : (
      <CartSkeleton />
   );
}
export default Details;
