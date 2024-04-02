function BurgerIcon({ setMenuOpen }: { setMenuOpen: (e: boolean) => void }) {
   function openMenu() {
      setMenuOpen(true);
      document.body.style.overflow = "hidden";
   }
   return (
      <button aria-label="Меню" onClick={openMenu} className="header__burgerBtn">
         <span></span>
         <span></span>
         <span></span>
      </button>
   );
}
export default BurgerIcon;
