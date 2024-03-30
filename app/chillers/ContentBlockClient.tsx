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
      <div ref={ref} className={`chiller-content__body mt-20 flex justify-around ${isInView ? "chiller-content__itemActive" : ""}`}>
         <div className="chiller-content__list flex flex-col justify-center">
            <p className="text-2xl chiller-content__item text-slate-800">{content.sub}</p>
         </div>
         <div className={`chiller-content__imgBody relative`}>
            <Image src={content.img} alt="vrf" fill style={{ objectFit: "contain" }} />
         </div>
      </div>
   );
}
export default ContentBlockClient;
