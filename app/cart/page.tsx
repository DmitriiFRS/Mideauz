"use client";

import "./cart.scss";
import Link from "next/link";
import useLocalStorage from "../hooks/useLocalStorage";

type CartItemType = {
   model: string;
   power: string;
   price: number;
   count: number;
};

function Cart() {
   const [value, setValue] = useLocalStorage("item", []);
   console.log(value.length ? true : false);
   function clearCart() {
      setValue([]);
   }
   return !value.length ? (
      <div className="text-9xl">Ваша корзина пуста</div>
   ) : (
      <div className="cart">
         <ul className="">
            {value.map((el: CartItemType, index) => {
               return (
                  <Link key={index} href={"/"}>
                     <li className="cart__item mt-8">
                        <p>
                           Модель: {el.model} {el.power} BTU
                        </p>
                        <p>Количество: {el.count}</p>
                        <p>Стоимость: {el.price * el.count} UZS</p>
                     </li>
                  </Link>
               );
            })}
         </ul>
         <button className="cart__clear mt-10" onClick={clearCart}>
            Очистить корзину
         </button>
      </div>
   );
}
export default Cart;
