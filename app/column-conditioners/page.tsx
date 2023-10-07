import {mideaConditionersData} from '../Data/ColumnConditionersData';
import {welkinConditionersData} from '../Data/ColumnConditionersData';
import Conditioners from './Conditioners';

function ColumnConditioners() {
   const data = [{
      title: 'Кондиционеры Midea',
   },
   {
      title: 'Кондиционеры Welkin',
   }]
   return (
      <section className='flex-auto'>
         <Conditioners title={data[0].title} data={mideaConditionersData}/>
         <Conditioners title={data[1].title} data={welkinConditionersData}/>
      </section>
   )
}
export default ColumnConditioners;