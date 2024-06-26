import { CurrencyFetchData } from "../Types/Col.type";
import fetchGraphqlData from "../Utilities/FetchGraphql";
import MainContainer from "./MainContainer";
import "./cart.scss";
import { Metadata } from "next/types";

export const metadata: Metadata = {
   title: "Корзина",
   description: "Корзина товаров в которой наши клиенты могут отправлять заявки с необходимым оборудованием нашим специалистам",
   keywords: ["Корзина", "Заявка", "Форма", "Общая стоимость", "Нужный товар"],
};

async function Cart() {
   const data: CurrencyFetchData = await fetchGraphqlData(`
   query {
      currencyValues {
        nodes {
          dollarValue {
            currencyValue
          }
        }
      }
    }
   `);
   return <MainContainer currencyValue={data.data.currencyValues.nodes[0].dollarValue.currencyValue} />;
}
export default Cart;
