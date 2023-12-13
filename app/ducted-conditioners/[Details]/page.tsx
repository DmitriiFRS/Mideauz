"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/Redux/store";
import { useEffect } from "react";
import { getConditionerItems } from "@/app/Redux/Slices/items.slice";
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
   }, []);
   return goods?.канальники ? <ItemListpage items={goods.канальники} /> : "first null";
}
export default Details;
