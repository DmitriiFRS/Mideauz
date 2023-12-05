"use client";

import Image from "next/image";
import { ContentBlockProps } from "./ContentBlock";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function ContentBlockClient({ content }: { content: ContentBlockProps }) {
   const [isInView, setIsView] = useState<boolean>(false);
   const { ref, inView } = useInView({
      threshold: 0.3,
      triggerOnce: true,
   });
   useEffect(() => {
      setIsView(inView);
   }, [inView]);
   return (
      <div
         ref={ref}
         className={`vrf-content__body mt-20 flex justify-around ${isInView ? "vrf-content__itemActive" : ""}`}
      >
         <ul className="vrf-content__list flex flex-col justify-center">
            {content.list.map((el, index) => {
               return (
                  <li key={index} className="text-xl vrf-content__item text-slate-800">
                     {el}
                  </li>
               );
            })}
         </ul>
         <div className={`vrf-content__imgBody relative ${content.className}`}>
            <Image src={content.img} alt="vrf" fill />
         </div>
      </div>
   );
}
export default ContentBlockClient;
