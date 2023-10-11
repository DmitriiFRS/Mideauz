import {mideaConditionersData} from '../Data/Conditioners.data';
import {welkinConditionersData} from '../Data/Conditioners.data';
import ConditionersList from './index';

import Conditioners from "./index";
const brands = ['Кондиционеры Midea', 'Кондиционеры Welkin'];

async function getConditionsData() {
   const res = await fetch('http://localhost:4000/airConditioners');
   if (!res.ok) {
      console.log('error')
   }
   return res.json();
}

async function AirConditiones() {
   const data = await getConditionsData();
   console.log(data)
   return (
   <section className='flex-auto'>
      <ConditionersList brands={brands} data={data} />
   </section>
   )
}
export default AirConditiones;