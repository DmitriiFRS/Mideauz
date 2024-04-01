import Image from "next/image";
import "./Catalog.scss";
import midea from "../../public/logos/midea.svg";
import welkin from "../../public/logos/welkin.svg";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import catalogBG from "../../public/img/catalog_bg.jpg";

function Catalog() {
   return (
      <div className="catalog flex-auto pb-3 mt-14">
         <div className="catalog__bgBody">
            <Image src={catalogBG} alt="Каталог" fill style={{ objectFit: "cover", opacity: "0.4" }} />
         </div>
         <div className="catalog__container container">
            <Breadcrumbs />
            <h2 className="text-center text-4xl font-semibold text-slate-800">Каталоги Midea & Welkin</h2>
            <div className="catalog__body flex gap-10 items-center justify-center">
               <div className="catalog__body flex flex-col items-center justify-center w-full">
                  <div className="catalog__logoContainer relative mt-16">
                     <Image src={midea} alt="midea logo" fill />
                  </div>
                  <a href="#" download className="flex items-center justify-center catalog__btnBody font-semibold mt-24">
                     <span className="catalog__btn relative z-10">Скачать каталог Midea</span>
                  </a>
               </div>
               <div className="catalog__body flex flex-col items-center justify-center w-full">
                  <div className="catalog__logoContainer relative mt-16">
                     <Image src={welkin} alt="midea logo" fill />
                  </div>
                  <a href="#" download className="flex items-center justify-center catalog__btnBody font-semibold mt-24">
                     <span className="catalog__btn relative z-10">Скачать каталог Welkin</span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Catalog;
