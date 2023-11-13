"use client";

import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Main from "./Main";
import "./cart.scss";
import { useRouter } from "next/navigation";

function Cart() {
   const [value, setValue] = useLocalStorage("item", []);
   const [isModalOpen, setModalStatus] = useState<boolean>(false);
   const router = useRouter();
   function clearCart() {
      setValue([]);
      setModalStatus(false);
   }
   function clearModalOpen() {
      if (!value.length) return false;
      setModalStatus(true);
   }
   function back() {
      router.back();
   }
   return (
      <div className="cart mt-14 flex-auto">
         <div className="cart__header container flex items-center">
            <h2 className="text-4xl font-medium flex-auto">Корзина товаров</h2>
            <button onClick={back} className="cart__btnBody ml-3 flex items-center justify-center">
               <span className="cart__btn relative z-10">Вернуться назад</span>
            </button>
            <button onClick={clearModalOpen} className="cart__btnBody ml-3 flex items-center justify-center">
               <span className="cart__btn relative z-10">Очистить корзину</span>
            </button>
         </div>
         <Main
            value={value}
            setValue={setValue}
            isModalOpen={isModalOpen}
            setModalStatus={setModalStatus}
            clearCart={clearCart}
         />
      </div>
   );
}
export default Cart;
