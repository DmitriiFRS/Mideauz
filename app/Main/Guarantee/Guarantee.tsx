import GuaranteeColumns from "./GuaranteeColumns";
import "./Guarantee.scss";

function Guarantee() {
   return (
      <section className="guarantee">
         <div className="container flex flex-col justify-center items-center text-slate-700">
            <h2 className="guarantee__title text-7xl font-bold">Наша тройная гарантия</h2>
            <div className="guarantee__subtitle text-4xl mt-6 font-light">Будьте совершенно спокойны</div>
            <GuaranteeColumns />
         </div>
      </section>
   );
}
export default Guarantee;
