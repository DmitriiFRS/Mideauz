import { CurrencyFetchData } from "../Types/Col.type";
import fetchGraphqlData from "../Utilities/FetchGraphql";
import MainContainer from "./MainContainer";
import "./cart.scss";

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
