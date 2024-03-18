import { useState } from "react";
import { CartItemType } from "./Main";

type GoodsListType = {
   модель: string;
   количество: number;
   стоимостьЕД: string;
   общая: string;
};

function SendDataForm({
   clientValue,
   setValue,
   currencyValue,
   total,
   totalUSD,
   setAcceptModalStatus,
}: {
   clientValue: Array<CartItemType>;
   setValue: Function;
   currencyValue: number | undefined;
   total: number;
   totalUSD: number;
   setAcceptModalStatus: (value: boolean) => void;
}) {
   const [name, setName] = useState<string>("");
   const [phone, setPhone] = useState<string>("");
   const [isNameDirty, setNameDirty] = useState<boolean>(false);
   const [isPhoneDirty, setPhoneDirty] = useState<boolean>(false);
   const [isUncorrectForm, setUncorrectForm] = useState<boolean>(false);
   function submitForm(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      if (name.length < 2) {
         setUncorrectForm(true);
         setNameDirty(true);
         if (phone.length < 9) {
            setPhoneDirty(true);
         }
         return;
      } else if (phone.length < 9) {
         setUncorrectForm(true);
         setPhoneDirty(true);
         return;
      }
      const date = new Date();
      let newValue: Array<GoodsListType> = [];
      if (currencyValue) {
         clientValue.map((el) => {
            return newValue.push({
               модель: `${el.model} ${el.power}BTU`,
               количество: el.count,
               стоимостьЕД: `${(el.price * currencyValue).toLocaleString()} UZS | ${el.price} USD`,
               общая: `${(el.price * currencyValue * el.count).toLocaleString()} UZS | ${el.price * el.count} USD`,
            });
         });
      }
      const data = {
         имя: name,
         телефон: phone,
         сумма: `${total.toLocaleString()} UZS | ${totalUSD} USD`,
         товар: newValue,
         дата: `${date.getDate()}.${
            date.getMonth() + 1
         }.${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`,
      };
      /*const docRef = doc(db, "заявки", "2gtV71ouF5nxoPcxcwkl");
      updateDoc(docRef, {
         dataArray: arrayUnion(data),
      });*/
      setPhone("");
      setName("");
      setAcceptModalStatus(true);
      setValue([]);
   }
   //validation ---------------
   function resetValid(e: React.FocusEvent<HTMLInputElement>) {
      setNameDirty(false);
      setPhoneDirty(false);
      setUncorrectForm(false);
   }
   function checkPhoneInput(e: React.ChangeEvent<HTMLInputElement>) {
      if (!/^\d*$/.test(e.target.value)) return;
      if (e.target.value.length > 12) return;
      setPhone(e.target.value);
   }
   function checkNameInput(e: React.ChangeEvent<HTMLInputElement>) {
      if (!/^[a-zA-Zа-яА-Я\s]*$/.test(e.target.value)) return;
      if (e.target.value.length > 30) return;
      setName(e.target.value);
   }
   return (
      <form className={`cart__additional mr-7 p-3 ${!clientValue.length ? "cart__additional__disable" : ""}`}>
         <h3 className="text-lg">Оформите заявку, и специалист свяжется с вами в ближайшее время</h3>
         <div className="mt-10">
            <input
               value={name}
               onFocus={(e) => resetValid(e)}
               onChange={(e) => checkNameInput(e)}
               className={`cart__input text-xl ${isNameDirty ? "cart__input__invalid" : ""} py-2 px-5 w-full`}
               type="text"
               placeholder="Как к вам обращаться?"
            />
         </div>
         <div className="mt-10">
            <input
               value={phone}
               onFocus={(e) => resetValid(e)}
               onChange={(e) => checkPhoneInput(e)}
               className={`cart__input text-xl ${isPhoneDirty ? "cart__input__invalid" : ""} py-2 px-5 w-full`}
               type="tel"
               placeholder="Ваш номер телефона"
            />
         </div>
         {isUncorrectForm && <div className="cart__validError mt-5 text-lg">Заполните корректно все поля</div>}
         <div className="cart__separator"></div>
         <button
            onClick={(e) => submitForm(e)}
            type="submit"
            className="flex items-center justify-center cart__btnBody w-full"
         >
            <span className="cart__btn relative z-10">Оставить заявку</span>
         </button>
      </form>
   );
}
export default SendDataForm;
