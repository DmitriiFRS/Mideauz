import "./vrf.scss";
import Image from "next/image";

type ContentBlockProps = {
   title: string;
   list: Array<string>;
   img: any;
};

function ContentBlock({ content }: { content: ContentBlockProps }) {
   return (
      <div className="vrf-content mt-20">
         <h4 className="text-center font-semibold text-4xl text-slate-500">{content.title}</h4>
         <div className="mt-20 flex justify-around">
            <ul className="vrf-content__list flex flex-col justify-center">
               {content.list.map((el, index) => {
                  return (
                     <li key={index} className="text-lg vrf-content__item text-slate-600">
                        {el}
                     </li>
                  );
               })}
            </ul>
            <div className="vrf-content__imgBody relative">
               <Image src={content.img} alt="vrf" fill />
            </div>
         </div>
      </div>
   );
}
export default ContentBlock;
