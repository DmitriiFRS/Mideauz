import Breadcrumbs from "../Utilities/Breadcrumbs";
import "./Coordinates.scss";
import YandexMap from "./YandexMap";
import { Metadata } from "next/types";

export const metadata: Metadata = {
   title: "Координаты",
   description: "Как нас можно найти",
   keywords: ["Координаты", "Поиск", "yandex", "maps", "Карта"],
};

function Coordinates() {
   return (
      <div className="coordinates flex-auto pb-3 mt-14">
         <div className="container">
            <Breadcrumbs />
            <h2 className="text-center text-4xl font-semibold text-slate-500">Наши координаты</h2>
            <div className="coordinates__line mt-14"></div>
            <div className="coordinates__main mt-14 grid grid-cols-2 gap-10 text-slate-600">
               <div className="coordinates__titleBody flex flex-col justify-center">
                  <div className="">
                     <h4 className="coordinates__titles text-5xl font-medium">Адрес</h4>
                     <p className="coordinates__subtitles text-3xl mt-3">Узбекистан, г. Ташкент, Чиланзар-1, улица Лабихавуз, 57</p>
                  </div>
                  <div className="coordinates__line mt-12"></div>
                  <div className="mt-12">
                     <h4 className="coordinates__titles text-5xl font-medium">Контакты</h4>
                     <p className="coordinates__subtitles text-3xl mt-3">+998 93 123 66 06</p>
                  </div>
               </div>
               <YandexMap />
            </div>
         </div>
      </div>
   );
}
export default Coordinates;
