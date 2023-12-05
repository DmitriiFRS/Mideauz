import ContentBlockClient from "./ContentBlockClient";
import "./vrf.scss";
import Image from "next/image";

export type ContentBlockProps = {
   title: string;
   list: Array<string>;
   img: any;
};

function ContentBlock({ content }: { content: ContentBlockProps }) {
   return (
      <div className="vrf-content mt-20">
         <h4 className="text-center font-semibold text-4xl text-slate-500">{content.title}</h4>
         <ContentBlockClient content={content} />
      </div>
   );
}
export default ContentBlock;
