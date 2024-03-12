"use client";

import { RootState } from "@/app/Redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

function Description() {
   const [isFadeOut, setFadeOut] = useState(false);
   const currentEl = useSelector((state: RootState) => state.itemReducer.currentEl);
   return (
      currentEl && (
         <div className="conditionerCard__desc">
            <h2 className=" text-5xl text-slate-700 text-center conditionerCard__descTitle">Основные параметры</h2>
            <ul
               className={`${
                  isFadeOut ? "conditionerCard__desc__hide" : ""
               } conditionerCard__descList mt-14 grid grid-cols-2 w-full ${
                  currentEl.conditionerField.company[0] === "Midea"
                     ? "conditionerCard__midea"
                     : "conditionerCard__welkin"
               }`}
            >
               {currentEl.conditionerField.coolingOutput && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Мощность охлаждения: <span>{currentEl.conditionerField.coolingOutput} Btu/h</span>
                  </li>
               )}
               {currentEl.conditionerField.heatOutput && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Мощность обогрева: <span>{currentEl.conditionerField.heatOutput} Btu/h</span>
                  </li>
               )}
               {currentEl.conditionerField.energyOutput && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Расход электроэнергии: <span>{currentEl.conditionerField.energyOutput} kW</span>
                  </li>
               )}
               {currentEl.conditionerField.areaQuad && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Обслуживаемая площадь: <span>{currentEl.conditionerField.areaQuad} м2</span>
                  </li>
               )}
               {currentEl.conditionerField.areaCube && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Обслуживаемая площадь: <span>{currentEl.conditionerField.areaCube} м3</span>
                  </li>
               )}
               {currentEl.conditionerField.indoorNoiseLevel && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Уровень шума внутр. блока: <span>{currentEl.conditionerField.indoorNoiseLevel} dB</span>
                  </li>
               )}
               {currentEl.conditionerField.outdoorNoiseLevel && (
                  <li className="conditionerCard__descItem text-slate-600 text-lg">
                     Уровень шума внеш. блока: <span>{currentEl.conditionerField.outdoorNoiseLevel} dB</span>
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
