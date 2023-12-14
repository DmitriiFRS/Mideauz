"use client";

import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import BurgerNav from "./BurgerNav";
import HeaderNav from "./HeaderNav";

function Navs() {
   const [isMenuOpen, setMenuOpen] = useState(false);
   return (
      <>
         <HeaderNav />
         <BurgerIcon setMenuOpen={setMenuOpen} />
         <BurgerNav isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </>
   );
}
export default Navs;
