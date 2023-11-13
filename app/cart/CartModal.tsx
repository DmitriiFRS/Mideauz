import { BsQuestionCircle } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

function CartModal({
   isModalOpen,
   setModalStatus,
   clearCart,
}: {
   isModalOpen: boolean;
   setModalStatus: (value: boolean) => void;
   clearCart: () => void;
}) {
   const closeStyled = {
      position: "absolute",
      right: 0,
      top: 0,
      padding: "10px",
      opacity: 0.5,
      cursor: "pointer",
   };
   function closeModal() {
      setModalStatus(false);
   }
   return (
      <div onClick={closeModal} className={`${!isModalOpen ? "cart__modalStatus" : ""} cart__modal`}>
         <div
            onClick={(e) => e.stopPropagation()}
            className="cart__modal__body p-5 flex flex-col items-center relative"
         >
            <GrClose onClick={closeModal} style={closeStyled} size={50} />
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
         </div>
      </div>
   );
}
export default CartModal;
