import Image from "next/image";
import midea from "../../public/logos/MideaLogoBlue.png";
import welkin from "../../public/logos/Welkin.png";
import Link from "next/link";
import "./Header.scss";
import HeaderNav from "./HeaderNav";
import Search from "./Search";

function Header() {
   return (
      <header className="header flex flex-col px-2.5 bg-white relative z-30">
         <Search />
         <Link className="midea-logo absolute z-10" href={"/"}>
            <Image src={midea} alt="midea" width={160} height={80} />
         </Link>
         <HeaderNav />
         <Link className="welkin-logo absolute z-10" href={"/"}>
            <Image src={welkin} alt="welkin" width={160} height={80} />
         </Link>
      </header>
   );
}
export default Header;
