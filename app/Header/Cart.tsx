"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { setCartCount } from "../Redux/Slices/main.slice";
import useLocalStorage from "../hooks/useLocalStorage";

function Cart() {
   const clientValue = useSelector((state: RootState) => state.mainReducer.clientVal);
   const cartCount = useSelector((state: RootState) => state.mainReducer.cartCount);
   const [value] = useLocalStorage("item", []);
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      if (clientValue) {
         dispatch(setCartCount(clientValue.length));
      }
      if (!clientValue) {
         dispatch(setCartCount(value.length));
      }
   }, [clientValue, dispatch]);
   return (
      <Link href={"/cart"} className="header__cart flex items-center p-3">
         <span className="header__cart__title text-xl font-medium">Корзина</span>
         <div className="relative">
            <div className="absolute -right-2 -top-1 w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center font-semibold text">
               <span>{cartCount}</span>
            </div>
            <FaShoppingCart size="30px" />
         </div>
      </Link>
   );
}
export default Cart;
