

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faMessage, faUser, faGear, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="h-full w-16 fixed top-0 left-0 flex flex-col justify-between items-center text-white pt-16 pb-4 bg-gray-800 z-10">
      <div className="hover:text-green-500 py-8 ">
        <FontAwesomeIcon className="text-2xl" icon={faGamepad} />
      </div>
      <div className="hover:text-green-500">
        <FontAwesomeIcon className="text-2xl" icon={faMessage} />
      </div>
      <div className="hover:text-green-500">
        <FontAwesomeIcon className="text-2xl" icon={faUser} />
      </div>
      <div className="hover:text-green-500">
        <FontAwesomeIcon className="text-2xl" icon={faGear} />
      </div>
      <div className="hover:text-green-500 py-8">
        <FontAwesomeIcon className="text-2xl" icon={faArrowRightFromBracket} />
      </div>
    </div>
  );
}
