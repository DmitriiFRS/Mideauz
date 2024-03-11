"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
type equipItemProps = {
   el: {
      title: string;
      subtitle: string;
      img: any;
      href: string;
   };
   idx: number;
};

function EquipItem({ el, idx }: equipItemProps) {
   const [isItemView, setView] = useState<boolean>(false);
   const [isContentView, setContentView] = useState<boolean>(false);
   const { ref, inView } = useInView({
      threshold: [1],
      triggerOnce: true,
      delay: 250,
   });
   useEffect(() => {
      setView(inView);
      setTimeout(() => {
         setContentView(inView);
      }, 550);
   }, [inView]);
   return (
      <div
         style={{ width: isItemView ? "100%" : "0%" }}
         ref={ref}
         key={idx}
         className="equip__body py-5 overflow-hidden"
      >
         <div
            style={{ opacity: isContentView ? 1 : 0 }}
            className="container equip__container flex justify-around items-center text-center"
         >
            <Link href={el.href} className="equip__img_container flex items-center justify-center">
               <Image src={el.img} alt={el.title} width={idx === 4 ? 450 : 350} height={150} />
            </Link>
            <div className="flex flex-col items-center equip__title_body">
               <h3 className="equip__title text-6xl">{el.title}</h3>
               <p className="equip__subtitle text-2xl mt-7">{el.subtitle}</p>
               <Link href={el.href} className="equip__btn mt-7 font-semibold">
                  <span>Подробнее</span>
               </Link>
            </div>
         </div>
      </div>
   );
}
export default EquipItem;
