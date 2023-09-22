

import condition from '../../../public/img/Header/2.png';
import casette from '../../../public/img/Header/casette.png';
import column from '../../../public/img/Header/column-condition.png';
import vrf from '../../../public/img/Header/V8.png';
import chiller from '../../../public/img/Header/chiller.png';
import canal from    '../../../public/img/Header/canal.png';
import Image from 'next/image';

import './Equip.scss'
const equip = [{
   title: 'Бытовые кондиционеры настенного типа',
   subtitle: 'Премиум. Во всех отношениях',
   img: condition,
   href: '/air-conditioners'
},
{
   title: 'Бытовые кондиционеры колонного типа',
   subtitle: 'Великолепный дизайн и мощь',
   img: column,
   href: '/air-conditioners'
},
{
   title: 'Полупромышленные кондиционеры кассетного типа',
   subtitle: 'Эстетика и простота обслуживания',
   img: casette,
   href: '/air-conditioners'
},
{
   title: 'Полупромышленные кондиционеры канального типа',
   subtitle: 'Свежий воздух всегда с вами',
   img: canal,
   href: '/air-conditioners'
},
{
   title: 'VRF системы',
   subtitle: 'Последнее слово в кондиционировании',
   img: vrf,
   href: '/air-conditioners'
},
{
   title: 'Чиллеры',
   subtitle: 'Центральные интеллектуальные системы кондиционирования.',
   img: chiller,
   href: '/air-conditioners'
},
]

function Equip() {
   return (
   <section className="equip my-24 flex flex-col">
      {equip.map((el, idx) => {
         return (
            <div key={idx} className="equip__body py-5">
               <div className="container flex justify-around items-center text-center">
                  <div className="equip__img_container flex items-center justify-center">
                     <Image src={el.img} alt={el.title} width={idx === 4 ? 450 : 350} height={150} />
                  </div>
                  <div className="flex flex-col items-center equip__title_body">
                     <h3 className='text-6xl'>{el.title}</h3>
                     <p className='text-2xl mt-7'>{el.subtitle}</p>
                     <button className='equip__btn mt-7 font-medium'>Подробнее</button>
                  </div>
               </div>
            </div>
         )
      })}
   </section>
   )
}
export default Equip;