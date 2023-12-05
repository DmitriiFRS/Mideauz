import "./vrf.scss";

type ContentBlockProps = {
   title: string;
   list: Array<string>;
   img: any;
};

function ContentBlock({ content }: { content: ContentBlockProps }) {
   return (
      <div className="mt-20">
         <div className="">
            <h4></h4>
            <ul></ul>
         </div>
         <div className=""></div>
      </div>
   );
}
export default ContentBlock;
