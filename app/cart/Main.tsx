import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ultraviolet from "../../public/img/Equip/AirConditioners/Midea/Ultraviolet.jpg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { currencyValueData } from "../Redux/Slices/main.slice";
import CartSkeleton from "../Utilities/CartSkeleton";
import SendDataForm from "./SendDataForm";
import CartModal from "./CartModal";
import { PiTrashBold } from "react-icons/pi";
export type CartItemType = {
   model: string;
   power: string;
   price: number;
   count: number;
   id: number;
};

function Main({
   value,
   isModalOpen,
   setModalStatus,
   clearCart,
   setValue,
}: {
   value: Array<CartItemType>;
   isModalOpen: boolean;
   setModalStatus: (value: boolean) => void;
   clearCart: () => void;
   setValue: Function;
}) {
   const [clientValue, setClientValue] = useState<Array<CartItemType> | null>(null);
   const dispatch = useDispatch<AppDispatch>();
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
   const [total, setTotal] = useState(0);
   const [totalUSD, setTotalUSD] = useState(0);
   useEffect(() => {
      setClientValue(value);
   }, [value]);
   useEffect(() => {
      dispatch(currencyValueData());
      let totalVal = 0;
      clientValue?.forEach((el) => {
         totalVal += +el.price * el.count;
      });
      if (currencyValue) {
         setTotal(totalVal * currencyValue);
         setTotalUSD(totalVal);
      }
   }, [dispatch, clientValue, currencyValue]);
   function deleteItem(e: any) {
      console.log(e.currentTarget.id);
      value.forEach((el) => console.log(el.id));
      setValue(
         value.filter((el) => {
            return el.id.toString() !== e.currentTarget.id;
         })
      );
   }
   return clientValue ? (
      <div className="cart__body mt-10 mx-6">
         <div className={`cart__bodyContainer grid ${!value.length ? "cart__bodyContainer__wfull" : ""}`}>
            <div className="container cart__main">
               {!value.length ? (
                  <div className="flex flex-col items-center h-full justify-center">
                     <h2 className="text-4xl">Ваша корзина пуста</h2>
                     <Link className="mt-14 cart__btnBody" href={"/"}>
                        <button className="cart__btn text-xl relative z-10">Вернуться на главную</button>
                     </Link>
                  </div>
               ) : (
                  <>
                     <ul className="py-3 px-10">
                        {value.map((el: CartItemType, index: number) => {
                           return (
                              <li key={index} className="cart__item flex items-center justify-between">
                                 <Link href={"/"}>
                                    <Image src={ultraviolet} alt="condishn" width={200} height={200} />
                                 </Link>
                                 <div className="cart__desc flex justify-between items-center">
                                    <h3 className="cart__desc__model text-4xl">{`Кондиционер Midea ${el.model} ${el.power} BTU`}</h3>
                                    <div className="flex flex-col items-center">
                                       <span className="text-2xl">Количество</span>
                                       <span className="text-3xl mt-4">{el.count}</span>
                                    </div>
                                    <div className="cart__desc__priceBody flex">
                                       <div className="flex flex-col">
                                          <span className="cart__desc__title text-2xl">Общая стоимость</span>
                                          {currencyValue && (
                                             <span className="cart__desc__price text-3xl mt-4">
                                                {(el.price * currencyValue * el.count).toLocaleString()} UZS
                                             </span>
                                          )}
                                       </div>
                                       <button
                                          id={el.id.toString()}
                                          onClick={(e) => deleteItem(e)}
                                          className="cart__desc__trash"
                                       >
                                          <PiTrashBold size={40} />
                                       </button>
                                    </div>
                                 </div>
                              </li>
                           );
                        })}
                     </ul>
                     <div className="my-10 mx-9 text-xl  flex flex-col items-end">
                        Итоговая стоимость:{" "}
                        <span className="flex items-end text-3xl font-semibold mt-4">
                           {total.toLocaleString() + " UZS"}
                        </span>
                     </div>
                  </>
               )}
               <CartModal isModalOpen={isModalOpen} setModalStatus={setModalStatus} clearCart={clearCart} />
            </div>
            <SendDataForm clientValue={clientValue} currencyValue={currencyValue} total={total} totalUSD={totalUSD} />
         </div>
      </div>
   ) : (
      <CartSkeleton />
   );
}
export default Main;
