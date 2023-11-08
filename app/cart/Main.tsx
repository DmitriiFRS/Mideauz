import Link from "next/link";
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
type CartItemType = {
   model: string;
   power: string;
   price: number;
   count: number;
};

function Main({ value }: { value: Array<CartItemType> }) {
   const [clientValue, setClientValue] = useState<Array<CartItemType> | null>(null);
   useEffect(() => {
      setClientValue(value);
   }, [value]);
   return (
      clientValue && (
         <div className="cart__body grid grid-cols-2">
            <div className="cart__main">
               {!value.length ? (
                  <h2>Корзина пуста</h2>
               ) : (
                  <ul className="">
                     {value.map((el: CartItemType, index: number) => {
                        return (
                           <li key={index} className="cart__item mt-8">
                              <Link href={"/"}>
                                 <p>
                                    Модель: {el.model} {el.power} BTU
                                 </p>
                                 <p>Количество: {el.count}</p>
                                 <p>Стоимость: {el.price * el.count} UZS</p>
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               )}
            </div>
            <div className="cart__additional">fd</div>
         </div>
      )
   );
}
export default Main;
