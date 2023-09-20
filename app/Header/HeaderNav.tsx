"use client"
import Link from 'next/link';
import arrow from '../../public/icons/nav_arrow.svg';
import Image from 'next/image';
import { useState } from 'react';
const nav = [{
   id: 0,
   title: 'Оборудование'
},
{
   id: 1,
   title: 'Координаты',
   href: '/coordinates'
},
{
   id: 2,
   title: 'О Компании',
   href: '/about'
},
{
   id: 3,
   title: 'Каталоги',
   href: '/catalog'
}]
function HeaderNav() {
   const [display, setDisplay] = useState<boolean>(false)
   function displayBar() {
      setDisplay(true)
   }
   function hideBar() {
      setDisplay(false)
   }
   return (
      <nav className='flex items-center'>
         <div onMouseOver={hideBar} className='header__dropDownBody absolute w-screen h-screen left-0 top-0'>
            <div onMouseOver={(e) => e.stopPropagation()} style={{transform: display ? 'translateY(0%)' : 'translateY(-100%)'}} className='header__dropDown w-full h-2/5 bg-zinc-500'></div>
         </div>
         <ul className="header__navlist flex content-center text-xl relative z-10">
            {nav.map((el, idx) => {
               return (
                  el.href ? <li className="header__navitem cursor-pointer" key={idx}><Link href={el.href}>{el.title}</Link></li>
                  :  <li onMouseOver={displayBar} className="header__navitem flex cursor-pointer" key={idx}>
                        <span>{el.title}</span>
                        <Image className="ml-1.5" src={arrow} alt='' width={17} height={17} />
                     </li>
               )
            })}
         </ul>
      </nav>
)
}
export default HeaderNav;