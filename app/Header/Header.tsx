import Image from "next/image";
import midea from "../../public/logos/midea.svg";
import welkin from "../../public/logos/welkin.svg";
import Link from "next/link";
import "./Header.scss";
import Cart from "./Cart";
import Navs from "./Navs";

function Header() {
   return (
      <header className="header px-2.5 bg-white relative z-30 flex items-center">
         <div className="absolute left-0 top-0 w-full h-full flex justify-between items-center px-2">
            <Link className="midea-logo relative" href={"/"}>
               <div className="header__logos relative">
                  <Image src={midea} alt="midea" fill={true} />
               </div>
            </Link>
            <div className="flex items-center">
               <Cart />
               <Link className="welkin-logo relative" href={"/"}>
                  <div className="header__logos relative">
                     <Image src={welkin} alt="welkin" fill={true} />
                  </div>
               </Link>
            </div>
         </div>
         <Navs />
      </header>
   );
}
export default Header;
