import "./Preview.scss";

function Preview() {
   return (
      <section className="py-56 w-full h-full">
         <div className="preview__bg absolute left-0 top-0 w-full h-full z-0">
            <video loop autoPlay muted className="absolute z-0 left-0 top-0 w-full h-full object-cover">
               <source src="/video/preview.mp4" type="video/mp4" />
            </video>
         </div>
         <div className="container flex flex-col items-center justify-center relative h-full text-white">
            <h1 className="preview__title text-center">Страница официального представителя Midea в Узбекистане</h1>
            <h2 className="preview__subtitle text-4xl font-medium mt-11 text-center">По всем вопросам обращайтесь к нашим специалистам</h2>
            <div className="preview__phones-container flex justify-around text-3xl italic">
               <a className="preview__phones font-semibold" href={"tel://" + +998931236606}>
                  +998 93 123 66 06
               </a>
               <a className="preview__phones font-semibold" href={"tel://" + +998909958060}>
                  +998 90 995 80 60
               </a>
            </div>
         </div>
      </section>
   );
}
export default Preview;
