"use client";
import Link from "next/link";
import arrow from "../../public/icons/nav_arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderDropdownList from "./HeaderDropdownList";
const nav = [
   {
      id: 0,
      title: "Оборудование",
   },
   {
      id: 1,
      title: "Координаты",
      href: "/coordinates",
   },
   {
      id: 2,
      title: "О Компании",
      href: "/about",
   },
   {
      id: 3,
      title: "Каталоги",
      href: "/catalog",
   },
];
function HeaderNav() {
   const [display, setDisplay] = useState<boolean>(false);
   const [isDropdownActive, setDropdownActive] = useState<boolean>(false);
   function displayBar() {
      setDisplay(true);
      setTimeout(() => {
         setDropdownActive(true);
      });
   }
   function hideBar() {
      setDropdownActive(false);
      setDisplay(false);
   }
   useEffect(() => {
      function onScroll() {
         if (display) {
            setDropdownActive(false);
            setDisplay(false);
            window.removeEventListener("scroll", onScroll);
         }
      }
      window.addEventListener("scroll", onScroll);
      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, [display]);
   return (
      <nav className="header__nav items-center justify-center mt-6 w-full">
         <div
            style={{ visibility: display ? "visible" : "hidden", opacity: isDropdownActive ? 1 : 0 }}
            onMouseEnter={hideBar}
            className="header__dropDownBody absolute w-full left-0"
         >
            <div
               onMouseOver={(e) => e.stopPropagation()}
               onMouseEnter={displayBar}
               onMouseLeave={hideBar}
               style={{
                  height: isDropdownActive ? "400px" : "0%",
                  transition: isDropdownActive ? "0.5s ease-in-out" : "0.3s ease-in-out",
               }}
               className="header__dropDown overflow-hidden"
            >
               <HeaderDropdownList hideBar={hideBar} />
            </div>
         </div>
         <ul className="header__navlist flex content-center items-center text-xl relative z-10">
            {nav.map((el, idx) => {
               return el.href ? (
                  <li className="header__navItem cursor-pointer" key={idx}>
                     <Link href={el.href}>{el.title}</Link>
                  </li>
               ) : (
                  <li
                     onMouseEnter={displayBar}
                     onMouseLeave={hideBar}
                     className="header__navItem flex cursor-pointer"
                     key={idx}
                  >
                     <span>{el.title}</span>
                     <Image
                        style={{
                           transform: display ? "rotate(180deg)" : "rotate(0deg)",
                           transition: "0.3s",
                        }}
                        className="ml-1.5"
                        src={arrow}
                        alt=""
                        width={17}
                        height={17}
                     />
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
export default HeaderNav;
