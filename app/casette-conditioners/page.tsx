"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { useEffect } from "react";
import { casConditioneListData } from "../Redux/Slices/main.slice";
import Skeleton from "../Utilities/Skeleton";
import ConditionersList from ".";
import "./casette-conditioners.scss";
const brands = ["Кассетные кондиционеры Midea", "Кассетные кондиционеры Welkin"];
const skeletonSections = [1, 2, 3, 4];
function CasetteConditioners() {
   const dispatch = useDispatch<AppDispatch>();
   const conditionerList = useSelector((state: RootState) => state.mainReducer.casConditioners);
   useEffect(() => {
      dispatch(casConditioneListData());
      console.log(conditionerList?.list[0].midea);
   }, [dispatch]);
   return !conditionerList ? (
      <div className="skeleton__container grid grid-cols-2 grid-rows-2">
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
export default CasetteConditioners;
