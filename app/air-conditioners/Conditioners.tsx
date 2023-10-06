"use client"

import './air-conditioners.scss';
import Link from "next/link";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

type dataType = {
   name: string
   img: any
   subname: string
}

type ConditionersProps = {
   title: string
   data: Array<dataType>
}
function Conditioners({title, data}: ConditionersProps) {
   const [isView, setIsView] = useState(false);
   const {ref, inView} = useInView({
      threshold: 0.1,
      triggerOnce: true
   })
   useEffect(() => {
      setIsView(inView)
   }, [inView])
   return (
   <div className="conditioners container">
      <h2 className="text-center font-bold text-6xl text-slate-600">{title}</h2>
      <ul ref={ref} className="conditioners__list grid grid-cols-3 gap-12 mt-14">
         {data.map((el, index) => {
            return (
               <li style={{transitionDelay: (index / 6) + 's'}} className={`conditioners__item ${isView ? 'conditioners__item__active' : ''} flex flex-col text-center items-center py-6`} key={index}>
                  <div className='conditioners__img-container relative flex items-center justify-center z-0'>
                     <Image className='conditioners__img' src={el.img} alt={el.name} fill={true} />
                  </div>
                  <div className='flex flex-col'>
                     <p className='text-5xl font-medium relative z-10'>{el.name}</p>
                     <span className='text-2xl mt-5 inline-block'>{el.subname}</span>
                     <span className='text-xl mt-5 inline-block'>от 999.999 UZS</span>
                  </div>
                  <Link className='conditioners__btn mt-10' href={'/#'}>Выбрать параметры</Link>
               </li>
            )
         })}
      </ul>
   </div>
   )
}
export default Conditioners;