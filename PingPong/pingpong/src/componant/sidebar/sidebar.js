import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faMessage, faUser, faGear, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidenav">
       <div className="came">
         <FontAwesomeIcon className="i" icon={faGamepad} />
       </div>
       <div className="chat">
         <FontAwesomeIcon className="i" icon={faMessage} />
       </div>
       <div className="profile">
         <FontAwesomeIcon className="i" icon={faUser} />
       </div>
       <div className="seting">
         <FontAwesomeIcon className="i" icon={faGear} />
       </div>
       <div className="out">
         <FontAwesomeIcon className="i" icon={faArrowRightFromBracket} />
       </div>
    </div>
  );
}
