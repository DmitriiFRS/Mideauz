import { IoIosClose } from "react-icons/io";

function BurgerNav({ isMenuOpen, setMenuOpen }: { isMenuOpen: boolean; setMenuOpen: (e: boolean) => void }) {
   return (
      <div
         className={`header__burgerMenu ${
            isMenuOpen ? "header__burgerMenu__active" : ""
         } absolute left-0 top-0 h-screen w-full bg-white`}
      >
         <div className="header__burgerBody relative w-full h-full">
            <button onClick={() => setMenuOpen(false)} className="header__burgerCloseBody absolute right-0 top-0">
               <IoIosClose style={{ width: "100%", height: "100%" }} />
            </button>
            <nav className="header__burgerNav">
               <ul className="header__list">
                  <li className="header__BurgerItem">1</li>
                  <li className="header__BurgerItem">2</li>
                  <li className="header__BurgerItem">3</li>
                  <li className="header__BurgerItem">4</li>
               </ul>
               <ul className="header__sublist">
                  <li className="header__BurgerSubitem">1</li>
                  <li className="header__BurgerSubitem">2</li>
                  <li className="header__BurgerSubitem">3</li>
                  <li className="header__BurgerSubitem">4</li>
                  <li className="header__BurgerSubitem">5</li>
                  <li className="header__BurgerSubitem">6</li>
               </ul>
            </nav>
         </div>
      </div>
   );
}
export default BurgerNav;
