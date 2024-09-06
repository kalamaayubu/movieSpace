import { useContext } from "react";
import { WatchingPageContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


function WatchingPage() {
    const { watchingPage, setWatchingPage } = useContext(WatchingPageContext); // Use the watchingPage state and its setter function setWatchingPage from the WatchingPageContext
    
    // Function to hide the Watching page
    const hideWatchingPage = () => {
        setWatchingPage(false);
    };

  if (watchingPage == true) {
    return (
        <div className="watching-page fixed top-0 bottom-0 left-0 right-0 bg-red-400 z-55 transition-all duration-[700ms]">
          <div className="font-bold text-2xl p-1 flex justify-between">
            {/* The title of the movie to be added dynamically as per the played movie */}
            <h1>The Matrix </h1>
            <button onClick={hideWatchingPage} className="">
                <FontAwesomeIcon icon={faClose} className="cursor-pointer py-[3px] px-[4px] border border-black hover:text-red-600"/>
            </button>
          </div>
          <div className="w-full h-[85%]">
            {/* The movie itself(video) with its controls */}
          </div>
          <div className="px-2">
            {/* To be populated dynamically */}
            <p> Genre: bla.. </p>
            <p> Overview: A true stroy about two youngmen... blablabla... </p>
            <p> Release date: 123.. </p>
          </div>
        </div>
    );
  }
};

export default WatchingPage
