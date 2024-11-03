import React from "react";

const GreetingUser = (props) => {
   const { username, isDarkMode } = props;
   return (
      <div className={`d-flex align-items-center justify-content-center gap-2 min-h-80 ${isDarkMode ? "bg-secondary" : "bg-light"}`}>
         <div className={`${isDarkMode ? "bg-light" : "bg-secondary"} px-5 py-3 rounded-2 text-center`}>
            <i className={`bi bi-robot fs-3 ${isDarkMode ? "text-black" : "text-light"} py-3`}></i>
            <div>
               <h4 className={`m-0 fs-4 ${isDarkMode ? "text-black" : "text-light"}`}>Halo, {username}!</h4>
               <p className={`m-0 my-2 ${isDarkMode ? "text-black" : "text-light"}`}>Ada yang bisa kami bantu? Jangan ragu untuk tanyakan di bawah, ya!</p>
            </div>
         </div>
      </div>
   );
}

export default GreetingUser;