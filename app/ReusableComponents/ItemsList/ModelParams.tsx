"use client";

import { useSelector } from "react-redux";
import "../../column-conditioners/column-conditioners.scss";
import { RootState } from "@/app/Redux/store";
import { useEffect, useState } from "react";
import { ColModelTypeInner } from "@/app/Types/Col.type";

function ModelParams() {
   const currentItems = useSelector((state: RootState) => state.itemReducer.itemsList);
   const firstInputVal = useSelector((state: RootState) => state.itemReducer.firstInputVal);
   const secondInputVal = useSelector((state: RootState) => state.itemReducer.secondInputVal);
   const [currentItem, setCurrentItem] = useState<null | ColModelTypeInner>(null);
   useEffect(() => {
      if (secondInputVal && currentItems) {
         const itemsCopy = currentItems.slice();
         if (
            itemsCopy.every((el) => el.col.type[0] === "Inverter") ||
            itemsCopy.every((el) => el.col.type[0] === "On/Off")
         ) {
            console.log("if");
            itemsCopy.forEach((el) => {
               if (el.col.power[0] === secondInputVal) {
                  setCurrentItem(el);
               }
            });
         } else {
            console.log("else");
            itemsCopy.forEach((el) => {
               if (el.col.type[0] === firstInputVal && el.col.power[0] === secondInputVal) {
                  setCurrentItem(el);
               }
            });
         }
      }
   }, [firstInputVal, secondInputVal, currentItems]);
   useEffect(() => {
      console.log(currentItem);
   }, [currentItem]);
   return (
      currentItem && (
         <ul className="colConditionerCard__advantages mt-10 grid w-full">
            <li className="colConditionerCard__list-disc">
               Мощность охлаждения: {currentItem.col.coolingOutput} Btu/h
            </li>
            <li className="colConditionerCard__list-disc">Мощность обогрева: {currentItem.col.heatOutput} Btu/h</li>
            <li className="colConditionerCard__list-disc">Тип компрессора: {currentItem.col.type}</li>
            <li className="colConditionerCard__list-disc">Диапазон температур: {currentItem.col.temperatureRange}С</li>
            <li className="colConditionerCard__list-disc">Обслуживаемая площадь: {currentItem.col.areaQuad} м2</li>
            <li className="colConditionerCard__list-disc">Обслуживаемая площадь: {currentItem.col.areaCube} м3</li>
            <li className="colConditionerCard__list-disc">Количество хладагента: {currentItem.col.coolantCapacity}</li>
            <li className="colConditionerCard__list-disc">
               Уровень шума внутр. блока: {currentItem.col.indoorNoiseLevel} dB
            </li>
            <li className="colConditionerCard__list-disc">
               Уровень шума внеш. блока: {currentItem.col.outdoorNoiseLevel} dB
            </li>
         </ul>
      )
   );
}
export default ModelParams;
