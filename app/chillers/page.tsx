import "./chillers.scss";
import Image from "next/image";
import chillerMain from "../../public/img/Equip/chillers/magboost.png";
import Link from "next/link";
import ContentBlock from "./ContentBlock";
import mini from "../../public/img/Equip/chillers/mini.png";
import module from "../../public/img/Equip/chillers/module.png";
import highEfficient from "../../public/img/Equip/chillers/high-efficient.png";
import monoblock from "../../public/img/Equip/chillers/monoblock.png";
import centrifuge from "../../public/img/Equip/chillers/centrifugal.png";
import screw from "../../public/img/Equip/chillers/screw.png";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import { Metadata } from "next/types";

export const metadata: Metadata = {
   title: "Чиллеры",
   description: "Обзор Мини-чиллеров, Модульных, Высокопроизводительных, Моноблочных, Центробежных, и Винтовых чиллеров Midea",
   keywords: [
      "Magboost",
      "Mini-chiller",
      "chiller",
      "Модульный чиллер",
      "Высокопроизводительный чиллер",
      "Моноблочный чиллер",
      "Центробежный чиллер",
      "Винтовой чиллер",
      "Чиллер с водяным охлаждением конденсатора",
      "Чиллер с воздушным охлаждением конденсатора",
   ],
};

const chillers = {
   air: [
      {
         title: "Мини - чиллеры",
         sub: "Используется единое конструктивное решение, а гидравлический модуль встроен в наружный блок. Это чиллер с тепловым насосом с воздушным охлаждением, поэтому он не требует градирни на стороне конденсации. Компактные чиллеры обладают малым уровнем шума, просты в монтаже и техническом обслуживании. Все блоки обладают высокой энергоэффективностью при частичной нагрузке и относятся к классу «А+».",
         img: mini,
      },
      {
         title: "Модульные чиллеры",
         sub: "Это устройства для подготовки холодной (теплой) воды в системах кондиционирования воздуха для обеспечения работы фанкойлов и центральных кондиционеров. Системы холодоснабжения на базе модульных чиллеров дешевле и проще в эксплуатации, чем системы на базе чиллеров большой производительности.",
         img: module,
      },
      {
         title: "Высокопроизводительные чиллеры",
         sub: "Высокопроизводительные чиллеры со спиральным компрессором и воздушным охлаждением конденсатора конструктивно являются модульными. Основные модули — 330 и 440 кВт. До 8 модулей можно объединить, суммарная холодопроизводительность может достигать 3520 кВт. Устройство может широко использоваться в самыхразличных зданиях: отели, больницы и офисные здания и т. д.",
         img: highEfficient,
      },
      {
         title: "Моноблочные чиллеры",
         sub: "Являются наиболее эффективным и доступным оборудованием центральных систем кондиционирования.",
         img: monoblock,
      },
   ],
   water: [
      {
         title: "Центробежные чиллеры",
         sub: "Благодаря применению современной конструкции теплообменников и компрессора эффективность оборудования значительно увеличена. Для своих клиентов Midea выпускает чиллеры трех различных классов эффективности. Индивидуально могут быть изготовлены чиллеры с двумя компрессорами и высоким значением холодопроизводительности до 15 400 кВт.",
         img: centrifuge,
      },
      {
         title: "Винтовые чиллеры",
         sub: "Оснащены испарителем затопленного типа и высокоэффективным компрессором. Оптимизированная конструкция системы и повышенная эффективность теплообмена обеспечивают наилучшую работу агрегата, как при полной, так и при частичной нагрузке.",
         img: screw,
      },
   ],
};

function Chillers() {
   return (
      <section className="chiller flex-auto container">
         <Breadcrumbs />
         <h2 className="chiller__title mt-20 text-center font-semibold text-7xl">Чиллеры</h2>
         <div className="chiller__content1 bg-slate-100 p-16 mt-10">
            <div className="chiller__content1__body flex gap-10 justify-between text-5xl items-center font-medium">
               <div className="">
                  <p className="chiller__content1__sub text-slate-500">Идеальное решение для больших и очень больших объектов.</p>
                  <div className="chiller__content1__contects flex justify-center gap-10 mt-12">
                     <a href={"tel://" + +998931236606} className="btn-blue chiller__btns">
                        <span className="btn-blue-inner">+998 93 123 66 06</span>
                     </a>
                     <Link className="btn-blue chiller__btns" href={"https://t.me/Midea_Welkin_uzb_1"} target="_blank">
                        <span className="btn-blue-inner">Telegram</span>
                     </Link>
                  </div>
               </div>
               <div className="chiller__content1__imgBody relative">
                  <Image src={chillerMain} alt="чиллеры" fill />
               </div>
            </div>
         </div>
         <div className="chiller__secondTitleBody mt-28">
            <h2 className="chiller__secondTitle text-center text-6xl font-medium tracking-wide text-blue-950">
               Ведущий производитель климатического оборудования
            </h2>
            <p className="chiller__secondSub mt-10 text-center text-3xl leading-10 text-slate-500">
               Сегодня Midea делает многомиллионные инвестиции в развитие производства чиллеров. С 1999 года компания сфокусировалась на исследованиях и
               разработках и конкурирует за счет самых передовых технологий.
            </p>
         </div>
         <div className="flex flex-col">
            <h3 className="chiller__secondTitle text-center mt-36 text-6xl font-medium text-blue-950">Чиллеры с воздушным охлаждением конденсатора</h3>
            {chillers.air.map((el, index) => {
               return <ContentBlock key={index} content={el} />;
            })}

            <h3 className="chiller__secondTitle text-center mt-20 text-6xl font-medium text-blue-950">Чиллеры с водяным охлаждением конденсатора</h3>
            {chillers.water.map((el, index) => {
               return <ContentBlock key={index} content={el} />;
            })}
         </div>
      </section>
   );
}
export default Chillers;
