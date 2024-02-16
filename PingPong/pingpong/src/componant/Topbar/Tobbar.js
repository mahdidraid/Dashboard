// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
// import "./tobbar.css";

// export default function Tobbar() {
//   return (
//     <div>
//       <header>
//         <img className="logo" src={require("./ping-pong-logo3.png")} alt="logo" />
        
//         <form>
//           <div className="search">
//             <label htmlFor="site-search"></label>
//             <div className="search-container">
//               <input type="text" placeholder="Search" id="site-search" name="q" />
//               <FontAwesomeIcon className="i" icon={faSearch} style={{ color: "#5AE4A7" }} />
//             </div>
//           </div>
//         </form>
        
//         <div className="icon">
//           <FontAwesomeIcon icon={faBell} style={{ color: "#5AE4A7" }} />
//         </div>
//       </header>
//     </div>
//   );
// }
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

export default function Tobbar() {
  return (
    <div>
      <header className="flex justify-between items-center text-center w-full h-16 bg-Second-coloer px-10">
        <img className="w-20 h-20 rounded-full ml-6"  src={require("./ping-pong-logo3.png")} alt="logo" />
        
        <form className="flex items-center">
          <div className="search">
            <label htmlFor="site-search"></label>
            <div className="relative">
              <input type="text" placeholder="Search" id="site-search" name="q" className="px-4 py-2 w-[400px] rounded-full border-none focus:outline-none" />
              <FontAwesomeIcon className="absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500 mr-4"  icon={faSearch} />
            </div>
          </div>
        </form>
        
        <div className="icon">
          <FontAwesomeIcon icon={faBell} className="text-green-500 text-xl" />
        </div>
      </header>
    </div>
  );
}
