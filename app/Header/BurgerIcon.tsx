function BurgerIcon({ setMenuOpen }: { setMenuOpen: (e: boolean) => void }) {
   function openMenu() {
      setMenuOpen(true);
      document.body.style.overflow = "hidden";
   }
   return (
      <button onClick={openMenu} className="header__burgerBtn">
         <span></span>
         <span></span>
         <span></span>
      </button>
   );
}
export default BurgerIcon;
