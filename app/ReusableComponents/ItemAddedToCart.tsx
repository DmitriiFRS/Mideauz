import "./styles.scss";
import Link from "next/link";
import { useState } from "react";
import { FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";

function ItemAddedToCart({ isInProgress }: { isInProgress: boolean }) {
   return (
      <div
         className={`order ${
            isInProgress ? "order__active" : ""
         } w-full h-20 flex items-center justify-between text-2xl font-medium`}
      >
         <FaCheckCircle className="order__accept" style={{ height: "40px", width: "40px", color: "#08eb00" }} />
         <h4 className="order__title ml-16 text-slate-800">Товар добавлен в корзину</h4>
         <Link href={"/cart"} className="goToCart flex items-center h-full">
            <p className="goToCart__sub mr-3">Перейти в корзину</p>
            <FaLongArrowAltRight
               className="goToCart__arrow"
               style={{ height: "30px", width: "30px", color: "#343E4E" }}
            />
         </Link>
      </div>
   );
}
export default ItemAddedToCart;
