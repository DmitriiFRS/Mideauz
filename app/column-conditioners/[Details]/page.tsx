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
import ItemListpage from "@/app/ReusableComponents/ItemsList/ItemListpage";

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

function Details() {
   const dispatch = useDispatch<AppDispatch>();
   const goods = useSelector((state: RootState) => state.itemReducer.itemsList);
   useEffect(() => {
      dispatch(getConditionerItems());
   }, [dispatch]);
   return goods?.колонники ? <ItemListpage items={goods.колонники} /> : "first null";
}
export default Details;
