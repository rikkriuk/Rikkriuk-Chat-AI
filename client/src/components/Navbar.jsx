import React from "react";

const Navbar = (props) => {
   const { username, isDarkMode, onClick } = props;
   
   const navbarClass = isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-body-tertiary";
   const textClass = isDarkMode ? "text-white" : "text-dark";

   return (
      <nav className={`navbar bg-secondary navbar-expand-lg ${navbarClass} container-fluid shadow-sm p-xl-3`}>
         <div className="container">
            <div className={`d-flex align-items-center justify-content-center gap-2 ${textClass}`}>
               <i className="bi bi-robot fs-4"></i>
               <h1 className="fs-4 m-0">Rikkriuk AI</h1>
            </div>
            <div className={`d-flex align-items-center justify-content-center gap-2 ${textClass}`}>
               <button className="btn btn-success" onClick={onClick}>
                  {isDarkMode ? "Light" : "Dark"}
               </button>
               <div className={`d-flex align-items-center justify-content-center gap-2 ${textClass}`}>
                  <i className="bi bi-person-circle fs-5"></i>
                  <h1 className="fs-5 m-0">{username}</h1>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;