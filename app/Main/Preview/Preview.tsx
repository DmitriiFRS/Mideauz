import './Preview.scss';
import Image from 'next/image';
import bg from '../../../public/img/Preview-bg.jpeg'

function Preview() {
return (
   <section className="py-56 w-full h-full">
      <div className="preview__bg absolute left-0 top-0 w-full object-cover z-0">
         <Image src={bg} alt='bg' fill={true} />
      </div>
      <div className="container flex flex-col items-center justify-center h-full relative z-10 text-white">
         <h1 className="preview__title text-center">Страница официального представителя Midea в Узбекистане</h1>
         <h2 className='text-4xl font-medium mt-11'>По всем вопросам обращайтесь к нашим специалистам</h2>
         <div className="flex justify-around w-full text-3xl italic">
            <div className="preview__phones font-semibold">+998 71 200 05 45</div>
            <div className="preview__phones font-semibold">+998 99 443 06 66</div>
         </div>
      </div>
   </section>
)
}
export default Preview;