"use client";

import { RootState } from "@/app/Redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

type ParamsPropsType = {
   itemParams: Array<string>;
   itemOtherParams: Array<string>;
   isFadeOut: boolean;
};

function Description() {
   const [isFadeOut, setFadeOut] = useState(false);
   const currentEl = useSelector((state: RootState) => state.itemReducer.currentEl);
   return (
      currentEl && (
         <div className="conditionerCard__desc">
            <h2 className="text-5xl text-slate-700 text-center">Основные параметры</h2>
            <ul
               className={`${
                  isFadeOut ? "conditionerCard__desc__hide" : ""
               } conditionerCard__descList mt-14 grid grid-cols-2 w-full`}
            >
               {currentEl.conditionerField.coolingOutput && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Мощность охлаждения: {currentEl.conditionerField.coolingOutput} Btu/h
                  </li>
               )}
               {currentEl.conditionerField.heatOutput && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Мощность обогрева: {currentEl.conditionerField.heatOutput} Btu/h
                  </li>
               )}
               {currentEl.conditionerField.energyOutput && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Расход электроэнергии: {currentEl.conditionerField.energyOutput} kW
                  </li>
               )}
               {currentEl.conditionerField.areaQuad && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Обслуживаемая площадь: {currentEl.conditionerField.areaQuad} м2
                  </li>
               )}
               {currentEl.conditionerField.areaCube && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Обслуживаемая площадь: {currentEl.conditionerField.areaCube} м3
                  </li>
               )}
               {currentEl.conditionerField.indoorNoiseLevel && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Уровень шума внутр. блока: {currentEl.conditionerField.indoorNoiseLevel} dB
                  </li>
               )}
               {currentEl.conditionerField.outdoorNoiseLevel && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Уровень шума внеш. блока: {currentEl.conditionerField.outdoorNoiseLevel} dB
                  </li>
               )}
            </ul>
         </div>
      )
   );
}
export default Description;

/*
{itemParams.map((el, index) => {
               return (
                  <li key={index} className="conditionerCard__descItem text-slate-600 text-lg">
                     {`-${el}`}
                  </li>
               );
            })}
*/
