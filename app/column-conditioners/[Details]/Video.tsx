function Video() {
   return (
      <div className="colConditionerCard__video flex justify-center my-14">
         <iframe
            className="colConditionerCard__video__inner h-full"
            src="https://www.youtube.com/embed/DV7lnHjpfB0?si=NPkMdH_cbXCcGGXX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
         ></iframe>
      </div>
   );
}
export default Video;
