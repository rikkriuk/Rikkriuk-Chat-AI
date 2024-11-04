import React from "react";

const InputChat = (props) => {
   const { onChange, onSubmit, isLoading, isDarkMode, query } = props;

   return (
      <div className={`container-fluid fixed-bottom p-xl-4 shadow-sm ${isDarkMode ? "bg-dark" : "bg-body-tertiary"}`}>
         <form className="container d-flex align-items-center justify-content-center gap-2 py-3">
            <input 
               onChange={onChange} 
               type="text" 
               className="form-control p-2"
               placeholder="Tuliskan pesan kamu..." 
               value={query}
               disabled={isLoading}
            />
            <button 
               onClick={onSubmit} 
               className="d-flex p-2 btn btn-success"
               disabled={isLoading}>
               <i className="bi bi-send me-2"></i>
               Kirim
            </button>
         </form>
      </div>
   );
}

export default InputChat;
