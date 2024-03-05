"use client";

import { useSelector } from "react-redux";
import "../../column-conditioners/column-conditioners.scss";
import { RootState } from "@/app/Redux/store";
import { useEffect, useState } from "react";
import { ColModelTypeInner } from "@/app/Types/Col.type";

function ModelParams() {
   const currentItems = useSelector((state: RootState) => state.itemReducer.itemsList);
   const [currentItem, setCurrentItem] = useState<null | ColModelTypeInner>(null);
   useEffect(() => {
      console.log(currentItems);
   }, [currentItems]);
   return (
      <div></div>
      /*<ul className="colConditionerCard__advantages mt-10 grid w-full">
         <li className="colConditionerCard__list-disc">Мощность охлаждения: {el.col.coolingOutput} Btu/h</li>
         <li className="colConditionerCard__list-disc">Мощность обогрева: {el.col.heatOutput} Btu/h</li>
         <li className="colConditionerCard__list-disc">Расход электроэнергии: {el.col.energyOutput} kW</li>
         <li className="colConditionerCard__list-disc">Тип компрессора: {el.col.type}</li>
         <li className="colConditionerCard__list-disc">Диапазон температур: {el.col.temperatureRange}С</li>
         <li className="colConditionerCard__list-disc">Обслуживаемая площадь: {el.col.areaQuad} м2</li>
         <li className="colConditionerCard__list-disc">Обслуживаемая площадь: {el.col.areaCube} м3</li>
         <li className="colConditionerCard__list-disc">Количество хладагента: {el.col.coolantCapacity}</li>
         <li className="colConditionerCard__list-disc">Уровень шума внутр. блока: {el.col.indoorNoiseLevel} dB</li>
         <li className="colConditionerCard__list-disc">Уровень шума внеш. блока: {el.col.outdoorNoiseLevel} dB</li>
      </ul>*/
   );
}
export default ModelParams;
