import { useEffect } from "react";
import { GrClose } from "react-icons/gr";

function CartModal({
   isModalOpen,
   closeModal,
   children,
}: {
   isModalOpen: boolean;
   closeModal: () => void;
   children: React.ReactNode;
}) {
   const closeStyled = {
      position: "absolute",
      right: 0,
      top: 0,
      padding: "10px",
      opacity: 0.5,
      cursor: "pointer",
   };
   useEffect(() => {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      if (isModalOpen) {
         document.body.style.overflow = "hidden";
         document.body.style.paddingRight = `${scrollBarWidth}px`;
      } else {
         document.body.style.overflow = "auto";
         document.body.style.paddingRight = "0px";
      }
   }, [isModalOpen]);
   return (
      <div onClick={closeModal} className={`${!isModalOpen ? "cart__modalStatus" : ""} cart__modal`}>
         <div
            onClick={(e) => e.stopPropagation()}
            className="cart__modal__body p-5 flex flex-col items-center relative"
         >
            <GrClose onClick={closeModal} style={closeStyled} size={50} />
            {children}
         </div>
      </div>
   );
}
export default CartModal;
