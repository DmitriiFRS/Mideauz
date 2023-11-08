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
         <div className="cart__header">
            <h2 className="inline-block w-full text-center text-4xl">Корзина товаров</h2>
            <button className="cart__clear mt-10" onClick={clearCart}>
               Очистить корзину
            </button>
         </div>
         <Main value={value} />
      </div>
   );
}
export default Cart;
