"use client";

import useLocalStorage from "../hooks/useLocalStorage";
import Main from "./Main";
import "./cart.scss";

function Cart() {
   const [value, setValue] = useLocalStorage("item", []);
   function clearCart() {
      setValue([]);
   }
   return (
      <div className="cart mt-14 flex-auto">
         <div className="cart__header container flex items-center">
            <h2 className="text-4xl flex-auto">Корзина товаров</h2>
            <button className="cart__clear">Вернуться к покупкам</button>
            <button className="cart__clear ml-3" onClick={clearCart}>
               Очистить корзину
            </button>
         </div>
         <Main value={value} />
      </div>
   );
}
export default Cart;