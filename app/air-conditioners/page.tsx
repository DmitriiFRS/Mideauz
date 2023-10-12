import {mideaConditionersData} from '../Data/Conditioners.data';
import {welkinConditionersData} from '../Data/Conditioners.data';
import ConditionersList from './index';

import ultraviolet from '../../public/img/Equip/AirConditioners/Midea/Ultraviolet.jpg';
import naomi from '../../public/img/Equip/AirConditioners/Midea/Naomi.png';
import lotusS from '../../public/img/Equip/AirConditioners/Midea/Lotus-gold.png';
import lotusG from '../../public/img/Equip/AirConditioners/Midea/Lotus-gold.png';
import gaia from '../../public/img/Equip/AirConditioners/Midea/Gaia.png';
import breezeless from '../../public/img/Equip/AirConditioners/Midea/Brezeless.png';
import alba from '../../public/img/Equip/AirConditioners/Midea/Alba.png';
import aep from '../../public/img/Equip/AirConditioners/Midea/AEP.png';

import apollon from '../../public/img/Equip/AirConditioners/Welkin/Apollon.jpg';
import ataman from '../../public/img/Equip/AirConditioners/Welkin/Ataman.jpg';
import epic from '../../public/img/Equip/AirConditioners/Welkin/Epic.png';
import epicG from '../../public/img/Equip/AirConditioners/Welkin/Epic-Gold.png';
import general from '../../public/img/Equip/AirConditioners/Welkin/General.jpg';
import novus from '../../public/img/Equip/AirConditioners/Welkin/Novus.jpg';
import nuar from '../../public/img/Equip/AirConditioners/Welkin/Nuar.png';
import sirius from '../../public/img/Equip/AirConditioners/Welkin/Sirius.jpg';
import vavilon from '../../public/img/Equip/AirConditioners/Welkin/Vavilon.jpg';
import zizoo from '../../public/img/Equip/AirConditioners/Welkin/Zizoo.jpg';

import Conditioners from "./index";
const brands = ['Кондиционеры Midea', 'Кондиционеры Welkin'];

async function getConditionsData() {
   const res = await fetch('http://localhost:4000/airConditioners');
   if (!res.ok) {
      console.log('error')
   }
   return res.json();
}
const imgesMidea = [ultraviolet, naomi, lotusS, lotusG, gaia, breezeless, alba, aep];
const imgesWelkin = [apollon, ataman, epic, epicG, general, novus, nuar, sirius, vavilon, zizoo]
async function AirConditiones() {
   const data = await getConditionsData();
   console.log(data)
   return (
   <section className='flex-auto'>
      {brands.map((el, index) => {
         return (
            <ConditionersList brand={el} data={index === 0 ? data.midea : data.welkin} imges={index === 0 ? imgesMidea : imgesWelkin} />
         )
      })}
      
   </section>
   )
}
export default AirConditiones;