
import Image from "next/image";
import midea from '../../public/logos/MideaLogoBlue.png';
import welkin from '../../public/logos/Welkin-01.png';
import Link from "next/link";
import './Header.scss'
import HeaderNav from "./HeaderNav";
import basket from '../../public/icons/basket.png';
import search from '../../public/icons/search.png'

function Header() {
return (
   <header className="flex flex-col px-2.5 bg-white">
      <div className="header__inputBody flex justify-center z-10">
         <input placeholder="Поиск товара" className="header__input" type="text" />
         <div className="header__inputIcon flex items-center justify-center">
            <Image src={search} alt="..." width={20} height={20}/>
         </div>
      </div>
      <div className="flex justify-between items-center">
         <Link className="relative z-10" href={'/'}><Image src={midea} alt="midea" width={120} height={80} /></Link>
            <HeaderNav />
            <div className="relative z-10 flex items-center">
               <div className="header__cart flex items-center cursor-pointer">
                  <span className="header__cartTitle">0 товаров</span>
                  <Image src={basket} alt="cart" width={50} height={50} />
               </div>
               <Link href={'/'}><Image src={welkin} alt="welkin" width={120} height={80} /></Link>
            </div>
      </div>
   </header>
)
}
export default Header;