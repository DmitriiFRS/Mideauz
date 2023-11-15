"use client";

import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Coordinates.scss";
import { useState } from "react";

function Coordinates() {
   const [isLoading, setLoading] = useState<boolean>(true);
   return (
      <div className="coordinates flex-auto pb-3 mt-14">
         <div className="container">
            <h2 className="text-center text-4xl font-semibold text-slate-500">Наши координаты</h2>
            <div className="coordinates__line mt-14"></div>
            <div className="coordinates__main mt-14 grid grid-cols-2 gap-10 text-slate-600">
               <div className="coordinates__title flex flex-col justify-center">
                  <div className="">
                     <h4 className="text-5xl font-medium">Адрес</h4>
                     <p className="text-3xl mt-3">Узбекистан, г. Ташкент, Чиланзар-1, улица Лабихавуз, 57</p>
                  </div>
                  <div className="coordinates__line mt-12"></div>
                  <div className="mt-12">
                     <h4 className="text-5xl font-medium">Контакты</h4>
                     <p className="text-3xl mt-3">+998 99 443 06 66</p>
                  </div>
               </div>
               <div className={`${isLoading ? "coordinates__map__loading" : "coordinates__map"}`}>
                  {isLoading && (
                     <div className="h-full w-full flex items-center justify-center">
                        <div className="lds-ring">
                           <div></div>
                           <div></div>
                           <div></div>
                           <div></div>
                        </div>
                     </div>
                  )}
                  <YMaps query={{ apikey: "295abdd2-9957-4f77-aaf0-443df34be66d" }} className="h-full w-full">
                     <Map
                        defaultState={{ center: [41.285448, 69.227032], zoom: 18 }}
                        style={{ width: "100%", height: "100%" }}
                        onLoad={() => setLoading(false)}
                        onError={() => alert("Ошибка при загрузке карты")}
                        className={"flex items-center justify-center"}
                     >
                        <Placemark geometry={[41.285448, 69.227032]} options={{ iconColor: "#ff0000" }} />
                     </Map>
                  </YMaps>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Coordinates;
