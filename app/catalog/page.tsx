import Image from "next/image";
import "./Catalog.scss";
import midea from "../../public/logos/midea.svg";
import welkin from "../../public/logos/welkin.svg";
import Link from "next/link";

function Catalog() {
   return (
      <div className="catalog flex-auto pb-3 mt-14">
         <div className="container">
            <h2 className="text-center text-4xl font-semibold text-slate-500">Каталоги</h2>
            <div className="catalog__body flex gap-10 items-center justify-center">
               <div className="catalog__body flex flex-col items-center justify-center w-full">
                  <div className="catalog__logoContainer relative mt-16">
                     <Image src={midea} alt="midea logo" fill />
                  </div>
                  <Link href={"#"} className="flex items-center justify-center catalog__btnBody mt-24">
                     <span className="catalog__btn relative z-10">Каталог Midea</span>
                  </Link>
               </div>
               <div className="catalog__body flex flex-col items-center justify-center w-full">
                  <div className="catalog__logoContainer relative mt-16">
                     <Image src={welkin} alt="midea logo" fill />
                  </div>
                  <Link href={"#"} className="flex items-center justify-center catalog__btnBody mt-24">
                     <span className="catalog__btn relative z-10">Каталог Welkin</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Catalog;
