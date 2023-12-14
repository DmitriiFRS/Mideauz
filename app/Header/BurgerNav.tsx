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
      <div
         className={`header__burgerMenu ${
            isMenuOpen ? "header__burgerMenu__active" : ""
         } absolute left-0 top-0 h-screen w-full bg-white`}
      >
         <div className="header__burgerBody relative w-full h-full">
            <button onClick={closeMenu} className="header__burgerCloseBody absolute right-2 top-2">
               <IoCloseSharp style={{ width: "100%", height: "100%" }} />
            </button>
            <button
               onClick={() => setSubMenuOpen(false)}
               className={`header__burgerBack ${
                  isSubMenuOpen ? "header__burgerBack__active" : ""
               } absolute left-2 top-2`}
            >
               <IoIosArrowBack style={{ width: "100%", height: "100%" }} />
            </button>
            <nav className="header__burgerNav flex justify-center w-full h-full relative overflow-y-auto overflow-x-hidden">
               <ul
                  className={`header__burgerList ${
                     isSubMenuOpen ? "header__burgerList__hide" : ""
                  } mt-36 absolute top-0 w-full flex flex-col items-center`}
               >
                  <li onClick={toggleMenu} className="header__BurgerItem">
                     Оборудование
                  </li>
                  <Link onClick={closeMenu} className="header__burgerItem" href={"/coordinates"}>
                     <li>Координаты</li>
                  </Link>
                  <Link onClick={closeMenu} className="header__burgerItem" href={"/about"}>
                     <li>О компании</li>
                  </Link>
                  <Link onClick={closeMenu} className="header__burgerItem" href={"/catalog"}>
                     <li>Каталоги</li>
                  </Link>
               </ul>
               <ul
                  className={`header__sublist ${
                     isSubMenuOpen ? "header__sublist__open" : ""
                  } mt-36 absolute top-0 px-2 text-center`}
               >
                  <Link
                     onClick={closeMenu}
                     className="header__burgerSubitem header__burgerItem"
                     href={"/air-conditioners"}
                  >
                     <li>Бытовые кондиционеры настенного типа</li>
                  </Link>
                  <Link
                     onClick={closeMenu}
                     className="header__burgerSubitem header__burgerItem"
                     href={"/column-conditioners"}
                  >
                     <li>Бытовые кондиционеры колонного типа</li>
                  </Link>
                  <Link
                     onClick={closeMenu}
                     className="header__burgerSubitem header__burgerItem"
                     href={"/casette-conditioners"}
                  >
                     <li>Полупромышленные кондиционеры кассетного типа</li>
                  </Link>
                  <Link
                     onClick={closeMenu}
                     className="header__burgerSubitem header__burgerItem"
                     href={"/ducted-conditioners"}
                  >
                     <li>Полупромышленные кондиционеры канального типа</li>
                  </Link>
                  <Link onClick={closeMenu} className="header__burgerSubitem header__burgerItem" href={"/vrf"}>
                     <li>VRF системы</li>
                  </Link>
                  <Link onClick={closeMenu} className="header__burgerSubitem header__burgerItem" href={"/chillers"}>
                     <li>Чиллер-фанкойл Midea</li>
                  </Link>
               </ul>
            </nav>
         </div>
      </div>
   );
}
export default BurgerNav;
