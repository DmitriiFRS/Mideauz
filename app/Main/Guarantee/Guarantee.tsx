import GuaranteeColumns from "./GuaranteeColumns";
import './Guarantee.scss'

function Guarantee() {
   return (
   <section className="guarantee">
      <div className="container flex flex-col justify-center items-center text-slate-500">
         <h2 className="guarantee__title text-7xl font-bold">Наша тройная гарантия</h2>
         <h4 className="guarantee__subtitle text-4xl mt-6 font-extralight">Будьте совершенно спокойны</h4>
         <GuaranteeColumns />
      </div>
   </section>
   )
}
export default Guarantee;