import Image from "next/image";
import midea from "../../public/logos/MideaLogoBlue.png";
import welkin from "../../public/logos/Welkin.png";
import Link from "next/link";
import "./Header.scss";
import HeaderNav from "./HeaderNav";
import Search from "./Search";
import Cart from "./Cart";

function Header() {
   return (
      <header className="header px-2.5 bg-white relative z-30 flex items-center">
         <div className="absolute left-0 top-0 w-full h-full flex justify-between items-center px-5">
            <Link className="midea-logo" href={"/"}>
               <div className="header__logos relative">
                  <Image src={midea} alt="midea" fill={true} />
               </div>
            </Link>
            <div className="flex items-center">
               <Cart />
               <Link className="welkin-logo" href={"/"}>
                  <div className="header__logos relative">
                     <Image src={welkin} alt="welkin" fill={true} />
                  </div>
               </Link>
            </div>
         </div>
         <HeaderNav />
      </header>
   );
}
export default Header;
