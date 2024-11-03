import React from "react";

const NameInput = (props) => {
   const { onChange, onSubmit } = props;
   return (
      <>
         <div className="overlay" />

         <div className="fixed-center shadow-sm p-4 bg-white rounded container">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
               <i className="bi bi-robot fs-4"></i>
               <p className="m-0">Masukan nama kamu !</p>
            </div>

            <input
               name="name"
               type="text"
               className="form-control p-2 mb-3"
               placeholder="contoh: tumbuhan"
               onChange={onChange}
               maxLength={10}
            />
            <button className="btn btn-success" onClick={onSubmit}>Simpan</button>
         </div>
      </>
   );
};

export default NameInput;
