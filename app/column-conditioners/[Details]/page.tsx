"use client";

import { useDispatch, useSelector } from "react-redux";
import "../column-conditioners.scss";
import { useParams } from "next/navigation";
import { AppDispatch, RootState } from "@/app/Redux/store";
import { currencyValueData } from "@/app/Redux/Slices/main.slice";
import { useEffect, useState } from "react";
import { getConditionerItems } from "@/app/Redux/Slices/items.slice";
import Image from "next/image";

function Details() {
   const [model, setModel] = useState<any>(null);
   const params = useParams();
   const dispatch = useDispatch<AppDispatch>();
   const goods = useSelector((state: RootState) => state.itemReducer.itemsList);
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
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
         setModel(newModel[0]);
      }
   }, [goods]);
   return model ? (
      <div className="colConditionerCard container flex flex-col flex-auto">
         <div className="flex">
            <div className="colConditionerCard__img">
               <Image src={model.img} alt={model.name} fill></Image>
            </div>
            <div className="colConditionerCard__options">ffff</div>
         </div>
         <div className="flex">
            <div className="colConditionerCard__desc"></div>
            <div className="colConditionerCard__advantages"></div>
         </div>
      </div>
   ) : (
      "null"
   );
}
export default Details;
