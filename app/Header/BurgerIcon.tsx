function BurgerIcon({ setMenuOpen }: { setMenuOpen: (e: boolean) => void }) {
   return (
      <button onClick={() => setMenuOpen(true)} className="header__burgerBtn">
         <span></span>
         <span></span>
         <span></span>
      </button>
   );
}
export default BurgerIcon;
