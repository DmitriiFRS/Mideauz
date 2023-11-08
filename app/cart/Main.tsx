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
         <div className="cart__body mt-10 mx-6">
            <div className={`cart__bodyContainer grid ${!value.length ? "cart__bodyContainer__wfull" : ""}`}>
               <div className="container cart__main">
                  {!value.length ? (
                     <h2 className="text-center">Корзина пуста</h2>
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
               <div className={`cart__additional ${!value.length ? "cart__additional__disable" : ""}`}>fd</div>
            </div>
         </div>
      )
   );
}
export default Main;
