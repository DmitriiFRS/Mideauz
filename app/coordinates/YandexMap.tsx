"use client";

import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useState } from "react";

function YandexMap() {
   const [isLoading, setLoading] = useState<boolean>(true);
   return (
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
   );
}
export default YandexMap;
