"use client";
import Link from "next/link";
import arrow from "../../public/icons/nav_arrow.svg";
import Image from "next/image";
import { useState } from "react";
import HeaderDropdownList from "./HeaderDropdownList";
import cart from "../../public/icons/basket.png";
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
  {
    id: 4,
    title: "0 товаров",
    img: cart,
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
  return (
    <nav className="header__nav flex items-center justify-center mt-6">
      <div
        style={{ visibility: display ? "visible" : "hidden" }}
        onMouseOver={hideBar}
        className="header__dropDownBody absolute w-full left-0"
      >
        <div
          onMouseOver={(e) => e.stopPropagation()}
          style={{ height: isDropdownActive ? "50%" : "0%" }}
          className="header__dropDown overflow-hidden"
        >
          <HeaderDropdownList />
        </div>
      </div>
      <ul className="header__navlist flex content-center items-center text-xl relative z-10">
        {nav.map((el, idx) => {
          return el.href ? (
            <li className="header__navitem cursor-pointer" key={idx}>
              <Link href={el.href}>{el.title}</Link>
            </li>
          ) : el.img ? (
            <li key={idx} className="header__navitem flex items-center">
              <span>{el.title}</span>
              <Image
                className="ml-3"
                src={cart}
                alt="cart"
                width={50}
                height={50}
              />
            </li>
          ) : (
            <li
              onMouseEnter={displayBar}
              className="header__navitem flex cursor-pointer"
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
