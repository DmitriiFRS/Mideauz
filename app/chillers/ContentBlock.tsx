import ContentBlockClient from "./ContentBlockClient";
import "./chillers.scss";

export type ContentBlockProps = {
   title: string;
   sub: string;
   img: any;
};

function ContentBlock({ content }: { content: ContentBlockProps }) {
   return (
      <div className="chiller-content mt-20">
         <h4 className="chiller-content__title text-center font-semibold text-4xl text-slate-600">{content.title}</h4>
         <ContentBlockClient content={content} />
      </div>
   );
}
export default ContentBlock;
