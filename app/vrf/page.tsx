import "./vrf.scss";
import V8Main from "../../public/img/Equip/vrf/v8.png";
import Image from "next/image";
import Link from "next/link";
import ContentBlock from "./ContentBlock";
import atom from "../../public/img/Equip/vrf/atom.png";
import V6 from "../../public/img/Equip/vrf/vrf-6.png";
import V8 from "../../public/img/Equip/vrf/V8-main.png";
import miniVRF from "../../public/img/Equip/vrf/mini-vrf.png";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import { Metadata } from "next/types";

export const metadata: Metadata = {
   title: "VRF-Системы",
   description: "Обзор VRF-систем и мини VRF Midea",
   keywords: ["VRF", "Mini-vrf", "Atom", "V8", "V6"],
};

const vrfs = [
   {
      title: "VRF-система серии V8",
      list: [
         "Степень защиты IP55 от влаги, соли, пыли и насекомых.",
         "Устойчивость к электромагнитным помехам от радиосвязи, высокого напряжения, другого оборудования.",
         "19 датчиков в холодильном контуре для анализа состояния в режиме реального времени.",
         "Система микроканального охлаждения электронных компонентов хладагентом.",
      ],
      img: V8,
      className: "vrf-content__v8",
   },
   {
      title: "VRF-система серии V6",
      list: [
         "Широкий диапазон производительности и рабочий диапазон",
         "EMS максимизирует комфорт и энергоэффективность",
         "EVI увеличивает мощность нагрева и охлаждения в экстремальных условиях",
         "Возможность конфигурирования до 3-х блоков в единую систему упрощают монтаж и эксплуатацию оборудования",
      ],
      img: V6,
      className: "vrf-content__v6",
   },
   {
      title: "Mini-VRF",
      list: [
         "Один наружный блок управляет до 9 внутренними блоками",
         "Более высокая энергоэффективность",
         "Меньшая площадь, более низкие профили и более тихая работа",
      ],
      img: miniVRF,
      className: "vrf-content__miniVRF",
   },
   {
      title: "Atom VRF",
      list: [
         "Идеально подходят для небольших и средних помещений.",
         "Высокоэффективный теплообменник наружного блока",
         "Автоматическая адресация внутренних блоков",
         "Возможность интеграции в систему диспетчеризации IMM Pro",
      ],
      img: atom,
      className: "vrf-content__atom",
   },
];

function Vrf() {
   return (
      <section className="vrf flex-auto container px-2">
         <Breadcrumbs />
         <h2 className="vrf__title mt-20 text-center font-semibold text-7xl">VRF Система</h2>
         <div className="vrf__content1 bg-slate-100 py-16 pl-16 mt-10">
            <div className="vrf__content1__body flex gap-11 justify-between mt-16 text-5xl items-center font-medium">
               <div className="">
                  <p className="vrf__content1__sub text-slate-500">Идеальное решение для частных домов, больших офисов, бизнес-центров</p>
                  <div className="vrf__content1__contects flex justify-center gap-10 mt-12">
                     <a href={"tel://" + +998931236606} className="btn-blue vrf__btns">
                        <span className="btn-blue-inner">+998 93 123 66 06</span>
                     </a>
                     <Link className="btn-blue vrf__btns" href={"https://t.me/Midea_Welkin_uzb_1"} target="_blank">
                        <span className="btn-blue-inner">Telegram</span>
                     </Link>
                  </div>
               </div>
               <div className="vrf__content1__imgBody relative">
                  <Image src={V8Main} alt="VRF" fill />
               </div>
            </div>
         </div>
         <div className="mt-28">
            <h2 className="vrf__secondTitle text-center text-6xl font-medium tracking-wide text-blue-950">Помещений много — система одна</h2>
            <p className="vrf__secondSub mt-10 text-center text-3xl leading-10 text-slate-500">
               Системы VRF — это центральные интеллектуальные системы, предназначенные для кондиционирования большого количества помещений. Название «VRF»
               переводится как «переменный расход хладагента», тем самым отражая принцип работы этой системы с использованием инверторной технологии. К одному
               наружному инверторному блоку можно присоединить несколько десятков внутренних блоков различных типов. Температура в каждом помещении регулируется
               индивидуально и с высокой точностью.
            </p>
         </div>
         <div className="">
            <h2 className="vrf__typeTitle text-center mt-36 text-6xl font-medium text-blue-950">Виды VRF систем Midea</h2>
            {vrfs.map((el, index) => {
               return <ContentBlock key={index} content={el} />;
            })}
         </div>
      </section>
   );
}
export default Vrf;
