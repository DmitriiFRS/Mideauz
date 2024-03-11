"use client";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Main from "./Main";
import "./cart.scss";
import { useRouter } from "next/navigation";

function MainContainer({ currencyValue }: { currencyValue: number }) {
   const [value, setValue] = useLocalStorage("item", []);
   const [isClearModalOpen, setClearModalStatus] = useState<boolean>(false);
   const [isAcceptModalOpen, setAcceptModalStatus] = useState<boolean>(false);
   const router = useRouter();
   function clearCart() {
      setValue([]);
      setClearModalStatus(false);
   }
   function clearModalOpen() {
      if (!value.length) return false;
      setClearModalStatus(true);
   }
   function back() {
      router.back();
   }
   return (
      <div className="cart mt-14 ">
         <div className="cart__header container flex items-center">
            <h2 className="text-4xl font-medium flex-auto">Корзина товаров</h2>
            <div className="flex">
               <button onClick={back} className="cart__btnBody ml-3 flex items-center justify-center">
                  <span className="cart__btn relative z-10">Вернуться назад</span>
               </button>
               <button onClick={clearModalOpen} className="cart__btnBody ml-3 flex items-center justify-center">
                  <span className="cart__btn relative z-10">Очистить корзину</span>
               </button>
            </div>
         </div>
         <Main
            value={value}
            setValue={setValue}
            isClearModalOpen={isClearModalOpen}
            setClearModalStatus={setClearModalStatus}
            isAcceptModalOpen={isAcceptModalOpen}
            setAcceptModalStatus={setAcceptModalStatus}
            clearCart={clearCart}
            currencyValue={currencyValue}
         />
      </div>
   );
}
export default MainContainer;
