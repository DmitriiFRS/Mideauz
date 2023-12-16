"use client";

import ConditionersList from "./index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { useEffect } from "react";
import { conditionerListData } from "../Redux/Slices/main.slice";
import Skeleton from "../Utilities/Skeleton";
import "./air-conditioners.scss";
const brands = ["Кондиционеры Midea", "Кондиционеры Welkin"];
const skeletonSections = [1, 2, 3, 4, 5, 6];

function AirConditiones() {
   const dispatch = useDispatch<AppDispatch>();
   const conditionerList = useSelector((state: RootState) => state.mainReducer.conditioners);
   useEffect(() => {
      dispatch(conditionerListData());
   }, [dispatch]);
   return !conditionerList ? (
      <div className="skeleton__container grid grid-cols-3 grid-rows-2">
         {skeletonSections.map((el, index) => {
            return <Skeleton key={index} />;
         })}
      </div>
   ) : (
      <section className="flex-auto">
         {brands.map((el, index) => {
            return (
               <ConditionersList
                  key={index}
                  conditionerList={index === 0 ? conditionerList.list[0].midea : conditionerList.list[1].welkin}
                  brands={brands[index]}
               />
            );
         })}
      </section>
   );
}
export default AirConditiones;
