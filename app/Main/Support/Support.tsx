import "./Support.scss";

function Support() {
   return (
      <section className="support my-20">
         <div className="container text-center text-slate-500">
            <h2 className="text-5xl font-bold">Остались вопросы?</h2>
            <div className="text-3xl font-semibold mt-7">Вы можете задать их нашим специалистам в любое время</div>
            <div className="support__flex-body flex justify-center gap-5">
               <a href={"tel://" + +998931236606} className="support__num text-3xl font-semibold italic mt-7 inline-block">
                  +998 93 123 66 06
               </a>
               <a href={"tel://" + +998909958060} className="support__num text-3xl font-semibold italic mt-7 inline-block">
                  +998 90 995 80 60
               </a>
            </div>
         </div>
      </section>
   );
}
export default Support;
