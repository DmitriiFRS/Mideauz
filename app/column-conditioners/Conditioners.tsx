import Image from "next/image";
import './column-conditioners.scss';
import Link from "next/link";
type DataType = {
   name: string
   subname?: string,
   img: any
   subtitle: string
}

type ConditionersProps = {
   title: string
   data: Array<DataType>
}

function Conditioners({title, data}: ConditionersProps) {
return (
   <div className="col-conditioners container">
      <h2 className="text-center font-bold text-6xl text-slate-600">{title}</h2>
      <ul className="grid grid-cols-2 gap-12 mt-14">
         {data.map((el, index) => {
            return (
               <li className="flex flex-col justify-center text-center items-center">
                  <div className={`${title === 'Кондиционеры Welkin' ? 'col-conditioners__img-container-welkin' : 'col-conditioners__img-container'} relative flex items-center justify-center z-0`}>
                     <Image src={el.img} alt={el.name} fill={true} />
                  </div>
                  <div className='flex flex-col'>
                     <p className='text-5xl font-medium relative z-10'>{el.name}</p>
                     <span className='text-2xl mt-5 inline-block'>{el.subname}</span>
                     <span className='text-xl mt-5 inline-block'>от 999.999 UZS</span>
                     <span className='text-xl mt-5 inline-block'>{el.subtitle}</span>
                  </div>
                  <Link className='col-conditioners__btn mt-10' href={'/#'}>Выбрать параметры</Link>
               </li>
            )
         })}
      </ul>
   </div>
)
}
export default Conditioners;