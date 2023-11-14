import search from "../../public/icons/search.png";
import Image from "next/image";

function Search() {
   return (
      <div className="header__inputBody hidden justify-center z-10">
         <input placeholder="Поиск товара" className="header__input" type="text" />
         <div className="header__inputIcon flex items-center justify-center">
            <Image src={search} alt="..." width={20} height={20} />
         </div>
      </div>
   );
}
export default Search;
