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
   return (
      currentItem && (
         <ul className="colConditionerCard__advantages mt-10 grid w-full">
            <li className="colConditionerCard__list-disc">
               Мощность охлаждения:&nbsp; <span>{currentItem.col.coolingOutput} Btu/h</span>
            </li>
            <li className="colConditionerCard__list-disc">
               Мощность обогрева:&nbsp; <span>{currentItem.col.heatOutput} Btu/h</span>
            </li>
            <li className="colConditionerCard__list-disc">
               Тип компрессора:&nbsp; <span>{currentItem.col.type}</span>
            </li>
            <li className="colConditionerCard__list-disc">
               Диапазон температур:&nbsp; <span>{currentItem.col.temperatureRange}С</span>
            </li>
            <li className="colConditionerCard__list-disc">
               Обслуживаемая площадь:&nbsp; <span>{currentItem.col.areaQuad} м2</span>
            </li>
            <li className="colConditionerCard__list-disc">
               Обслуживаемая площадь:&nbsp; <span>{currentItem.col.areaCube} м3</span>
            </li>
            <li className="colConditionerCard__list-disc">
               Количество хладагента:&nbsp; <span>{currentItem.col.coolantCapacity}</span>
            </li>
            <li className="colConditionerCard__list-disc">
               Уровень шума внутр. блока:&nbsp; <span>{currentItem.col.indoorNoiseLevel} dB</span>
            </li>
            <li className="colConditionerCard__list-disc">
               Уровень шума внеш. блока:&nbsp; <span>{currentItem.col.outdoorNoiseLevel} dB</span>
            </li>
         </ul>
      )
   );
}
export default ModelParams;
