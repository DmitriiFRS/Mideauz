import "./vrf.scss";
import V8Main from "../../public/img/Equip/vrf/V8-main.png";
import Image from "next/image";
import Link from "next/link";
import ContentBlock from "./ContentBlock";
import miniVRF from "../../public/img/Equip/vrf/vrf-mini.png";
import V4 from "../../public/img/Equip/vrf/vrf-v4.png";
import V5 from "../../public/img/Equip/vrf/vrf-5.png";
import V6 from "../../public/img/Equip/vrf/v6-side.png";

const vrfs = [
   {
      title: "Mini-VRF",
      list: [
         "Один наружный блок управляет до 9 внутренними блоками",
         "Более высокая энергоэффективность",
         "Меньшая площадь, более низкие профили и более тихая работа",
      ],
      img: miniVRF,
   },
   {
      title: "VRF-система серии V4 Plus",
      list: [
         "Компрессоры и вентиляторы с инверторным управлением",
         "Режимы одновременного нагрева и охлаждения",
         "Непрерывный нагрев во время размораживания",
         "Инновационный блок переключения режимов",
      ],
      img: V4,
   },
   {
      title: "VRF-система серии V5 X",
      list: [
         "Компрессоры и вентиляторы с инверторным управлением",
         "Высокоэффективный теплообменник",
         "Широкий диапазон производительности и рабочий диапазон",
         "Увеличенная длина труб",
         "5 ступеней контроля масла",
      ],
      img: V5,
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
   },
];

function Vrf() {
   return (
      <section className="vrf flex-auto container">
         <h2 className="vrf__title mt-20 text-center font-semibold text-7xl">VRF Система</h2>
         <div className="vrf__content1 bg-slate-100 p-5 mt-5 py-10">
            <div className="flex gap-11 justify-between mt-16 text-5xl items-center font-medium">
               <div className="">
                  <p className="vrf__content1__sub">
                     Идеальное решение для частных домов, больших офисов, бизнес-центров
                  </p>
                  <div className="vrf__content1__contects flex justify-center gap-10 mt-12">
                     <button className="btn-blue vrf__btns">
                        <span className="btn-blue-inner">+79271184766</span>
                     </button>
                     <Link className="btn-blue vrf__btns" href={"#"}>
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
            <h2 className="text-center text-6xl font-medium tracking-wide text-blue-950">
               Помещений много — система одна
            </h2>
            <p className="mt-10 text-center text-3xl leading-8 text-slate-500">
               Системы VRF — это центральные интеллектуальные системы, предназначенные для кондиционирования большого
               количества помещений. Название «VRF» переводится как «переменный расход хладагента», тем самым отражая
               принцип работы этой системы с использованием инверторной технологии. К одному наружному инверторному
               блоку можно присоединить несколько десятков внутренних блоков различных типов. Температура в каждом
               помещении регулируется индивидуально и с высокой точностью.
            </p>
         </div>
         <div className="">
            <h2 className="text-center mt-28 text-6xl font-medium text-blue-950">Виды VRF систем Midea</h2>
            {vrfs.map((el, index) => {
               return <ContentBlock key={index} content={el} />;
            })}
         </div>
      </section>
   );
}
export default Vrf;
