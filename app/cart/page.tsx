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
            <h2 className="text-4xl font-medium flex-auto">Корзина товаров</h2>
            <button className="cart__btnBody ml-3 flex items-center justify-center">
               <span className="cart__btn relative z-10">Вернуться к покупкам</span>
            </button>
            <button className="cart__btnBody ml-3 flex items-center justify-center" onClick={clearCart}>
               <span className="cart__btn relative z-10">Очистить корзину</span>
            </button>
         </div>
         <Main value={value} />
      </div>
   );
}
export default Cart;
