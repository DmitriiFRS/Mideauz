"use client"

import condition from '../../../public/img/Header/2.png';
import casette from '../../../public/img/Header/casette.png';
import column from '../../../public/img/Header/column-condition.png';
import vrf from '../../../public/img/Header/V8.png';
import chiller from '../../../public/img/Header/chiller.png';
import canal from    '../../../public/img/Header/canal.png';

import './Equip.scss'
import EquipItem from './EquipItem';
import { useState } from 'react';
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
            <EquipItem el={el} idx={idx} />
         )
      })}
   </section>
   )
}
export default Equip;