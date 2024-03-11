import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { setClientValData } from "../Redux/Slices/main.slice";
import CartSkeleton from "../Utilities/CartSkeleton";
import SendDataForm from "./SendDataForm";
import CartModal from "./CartModal";
import { PiTrashBold } from "react-icons/pi";
import { BsQuestionCircle } from "react-icons/bs";
import { MdDone } from "react-icons/md";
export type CartItemType = {
   model: string;
   power: string;
   price: number;
   count: number;
   id: string;
   type?: string;
   img: string;
};

function Main({
   value,
   isClearModalOpen,
   setClearModalStatus,
   isAcceptModalOpen,
   setAcceptModalStatus,
   clearCart,
   setValue,
   currencyValue,
}: {
   value: Array<CartItemType>;
   isClearModalOpen: boolean;
   setClearModalStatus: (value: boolean) => void;
   isAcceptModalOpen: boolean;
   setAcceptModalStatus: (value: boolean) => void;
   clearCart: () => void;
   setValue: Function;
   currencyValue: number;
}) {
   const [clientValue, setClientValue] = useState<Array<CartItemType> | null>(null);
   const dispatch = useDispatch<AppDispatch>();
   const [total, setTotal] = useState(0);
   const [totalUSD, setTotalUSD] = useState(0);
   useEffect(() => {
      setClientValue(value);
      dispatch(setClientValData(value));
   }, [value, dispatch]);
   useEffect(() => {
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
      setValue(
         value.filter((el) => {
            return el.id.toString() !== e.currentTarget.id;
         })
      );
   }
   function closeModal() {
      setClearModalStatus(false);
      setAcceptModalStatus(false);
   }
   return clientValue ? (
      <div className="cart__body mt-10">
         <div className={`cart__bodyContainer grid ${!value.length ? "cart__bodyContainer__wfull" : ""}`}>
            <div className="container cart__main">
               {!value.length ? (
                  <div style={{ animation: "fade-in 1s" }} className="flex flex-col items-center h-full justify-center">
                     <h2 className="text-4xl">Ваша корзина пуста</h2>
                     <Link className="mt-14 cart__btnBody" href={"/"}>
                        <button className="cart__btn text-xl relative z-10">Вернуться на главную</button>
                     </Link>
                  </div>
               ) : (
                  <>
                     <ul className="cart__list py-3 px-10">
                        {value.map((el: CartItemType, index: number) => {
                           return (
                              <li key={index} className="cart__item flex items-center justify-between">
                                 <div className="cart__imgBody relative">
                                    <Image src={el.img} alt="condishn" fill objectFit="contain" />
                                 </div>
                                 <h3 className="cart__desc__model text-4xl">{`Midea ${el.model} ${el.power} BTU ${
                                    el.type ? el.type : ""
                                 }`}</h3>
                                 <div className="cart__desc__countBody flex flex-col items-center">
                                    <span className="cart__desc__count text-2xl">Количество</span>
                                    <span className="cart__desc__count text-3xl mt-4">{el.count}</span>
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
                                    <button id={el.id} onClick={(e) => deleteItem(e)} className="cart__desc__trash">
                                       <PiTrashBold className="cart__desc__trashIcon" />
                                    </button>
                                 </div>
                              </li>
                           );
                        })}
                     </ul>
                     <div className="my-10 mx-9 text-xl  flex flex-col items-end">
                        Итоговая стоимость:{" "}
                        <span className="cart__totalPrice flex items-end text-3xl font-semibold mt-4">
                           {total.toLocaleString() + " UZS"}
                        </span>
                     </div>
                  </>
               )}
               <CartModal isModalOpen={isClearModalOpen} closeModal={closeModal}>
                  <BsQuestionCircle style={{ color: "rgb(82 82 91)" }} size={60} />
                  <h3 className="text-2xl text-center font-medium mt-14 text-zinc-600">
                     Вы действительно хотите удалить все товары из корзины?
                  </h3>
                  <div className="cart__modal__btns flex justify-around w-full mt-14">
                     <button onClick={clearCart} className="cart__modal__btn">
                        Да
                     </button>
                     <button onClick={closeModal} className="cart__modal__btn">
                        Нет
                     </button>
                  </div>
               </CartModal>
               <CartModal isModalOpen={isAcceptModalOpen} closeModal={closeModal}>
                  <MdDone style={{ color: "rgb(82 82 91)" }} size={60} />
                  <h3 className="text-2xl text-center font-medium mt-10 text-zinc-600">
                     Ваша заявка принята. Ожидайте, специалист с вами свяжется в ближайшее время
                  </h3>
                  <Link className="cart__modal__btn cart__modal__btnAccept mt-10 text-center" href={"/"}>
                     <button>Вернуться на главную</button>
                  </Link>
               </CartModal>
            </div>
            <SendDataForm
               clientValue={clientValue}
               setValue={setValue}
               currencyValue={currencyValue}
               total={total}
               totalUSD={totalUSD}
               setAcceptModalStatus={setAcceptModalStatus}
            />
         </div>
      </div>
   ) : (
      <CartSkeleton />
   );
}
export default Main;
/*
<Link href={"/"}>
                                    <div className="cart__imgBody relative">
                                       <Image src={ultraviolet} alt="condishn" fill />
                                    </div>
                                 </Link>
                                 <div className="cart__desc flex justify-between items-center">
                                    <h3 className="cart__desc__model text-4xl">{`Midea ${el.model} ${el.power} BTU ${
                                       el.type ? el.type : ""
                                    }`}</h3>
                                    <div className="flex flex-col items-center">
                                       <span className="cart__desc__count text-2xl">Количество</span>
                                       <span className="cart__desc__count text-3xl mt-4">{el.count}</span>
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
                                       <button id={el.id} onClick={(e) => deleteItem(e)} className="cart__desc__trash">
                                          <PiTrashBold size={40} />
                                       </button>
                                    </div>
                                 </div>
*/
