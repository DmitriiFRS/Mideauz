import {mideaConditionersData} from '../Data/ConditionersData';
import {welkinConditionersData} from '../Data/ConditionersData';

import Conditioners from "./index";
const data = [{
   title: 'Кондиционеры Midea',
},
{
   title: 'Кондиционеры Welkin',
}]

function AirConditiones() {
   return (
   <section className='flex-auto'>
            <Conditioners title={data[0].title} data={mideaConditionersData}/>
            <Conditioners title={data[1].title} data={welkinConditionersData}/>
   </section>
   )
}
export default AirConditiones;