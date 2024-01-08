import "./styles.scss";

function Video() {
   return (
      <div className="videoBody">
         <iframe
            className="videoBody__video"
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
