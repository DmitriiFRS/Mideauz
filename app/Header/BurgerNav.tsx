import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function BurgerNav({ isMenuOpen, setMenuOpen }: { isMenuOpen: boolean; setMenuOpen: (e: boolean) => void }) {
   const [isSubMenuOpen, setSubMenuOpen] = useState(false);
   function toggleMenu() {
      setSubMenuOpen(true);
   }
   function closeMenu() {
      setMenuOpen(false);
      setSubMenuOpen(false);
      document.body.style.overflow = "auto";
   }
   useEffect(() => {
      window.addEventListener("resize", closeMenu);
      return () => {
         window.removeEventListener("resize", closeMenu);
      };
   }, []);
   return (
      <div className={`header__burgerMenu ${isMenuOpen ? "header__burgerMenu__active" : ""} absolute left-0 top-0 h-screen w-full bg-white`}>
         <div className="header__burgerBody relative w-full h-full">
            <button onClick={closeMenu} className="header__burgerCloseBody absolute right-2 top-2">
               <IoCloseSharp style={{ width: "100%", height: "100%" }} />
            </button>
            <button
               onClick={() => setSubMenuOpen(false)}
               className={`header__burgerBack ${isSubMenuOpen ? "header__burgerBack__active" : ""} absolute left-2 top-2`}
            >
               <IoIosArrowBack style={{ width: "100%", height: "100%" }} />
            </button>
            <nav className="header__burgerNav flex justify-center w-full h-full relative overflow-y-auto overflow-x-hidden">
               <ul className={`header__burgerList ${isSubMenuOpen ? "header__burgerList__hide" : ""} mt-36 absolute top-0 w-full flex flex-col items-center`}>
                  <li onClick={toggleMenu} className="header__BurgerItem">
                     Оборудование
                  </li>
                  <li className="header__burgerItem">
                     <Link onClick={closeMenu} href={"/coordinates"}>
                        Координаты
                     </Link>
                  </li>
                  <li className="header__burgerItem">
                     <Link onClick={closeMenu} href={"/about"}>
                        О компании
                     </Link>
                  </li>
                  <li className="header__burgerItem">
                     <Link onClick={closeMenu} href={"/catalog"}>
                        Каталоги
                     </Link>
                  </li>
               </ul>
               <ul className={`header__sublist ${isSubMenuOpen ? "header__sublist__open" : ""} mt-36 absolute top-0 px-2 text-center`}>
                  <li className="header__burgerSubitem header__burgerItem">
                     <Link onClick={closeMenu} style={{ height: "100%", width: "100%" }} href={"/air-conditioners"}>
                        Бытовые кондиционеры настенного типа
                     </Link>
                  </li>
                  <li className="header__burgerSubitem header__burgerItem">
                     <Link onClick={closeMenu} style={{ height: "100%", width: "100%" }} href={"/column-conditioners"}>
                        Бытовые кондиционеры колонного типа
                     </Link>
                  </li>
                  <li className="header__burgerSubitem header__burgerItem">
                     <Link onClick={closeMenu} style={{ height: "100%", width: "100%" }} href={"/casette-conditioners"}>
                        Полупромышленные кондиционеры кассетного типа
                     </Link>
                  </li>
                  <li className="header__burgerSubitem header__burgerItem">
                     <Link onClick={closeMenu} style={{ height: "100%", width: "100%" }} href={"/ducted-conditioners"}>
                        Полупромышленные кондиционеры канального типа
                     </Link>
                  </li>
                  <li className="header__burgerSubitem header__burgerItem">
                     <Link onClick={closeMenu} style={{ height: "100%", width: "100%" }} href={"/vrf"}>
                        VRF системы
                     </Link>
                  </li>
                  <li className="header__burgerSubitem header__burgerItem">
                     <Link onClick={closeMenu} style={{ height: "100%", width: "100%" }} href={"/chillers"}>
                        Чиллер-фанкойл Midea
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   );
}
export default BurgerNav;
