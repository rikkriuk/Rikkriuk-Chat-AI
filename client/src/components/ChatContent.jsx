import React from "react";
import GreetingUser from "./GreetingUser";
import Markdown from "react-markdown";

const ChatContent = (props) => {   
   const { chats, isLoading, username, typing, isDarkMode } = props;

   if (isLoading) {
      return (
         <div className={`container-fluid d-flex align-items-start justify-content-center gap-2 p-5 min-h-80 ${isDarkMode ? "bg-secondary" : "bg-light"}`}>
            <div className="container d-flex align-items-center justify-content-center gap-2">
               <i className={`bi bi-robot fs-4 ${isDarkMode ? "text-light" : "text-secondary"}`}></i>
               <h2 className={`fs-5 m-0 ${isDarkMode ? "text-light" : "text-secondary"}`}>AI sedang berpikir...</h2>
            </div>
         </div>
      );
   }

   if (chats.length === 0) {
      return (
         <GreetingUser username={username} isDarkMode={isDarkMode} />
      );
   }

   return (
      <div className={`container-fluid min-h-80 ${isDarkMode ? "bg-secondary text-white" : "bg-light text-dark"}`}>
         <div className="container">
            {chats.map((chat, index) => {
               const { question, answer } = chat;
               return (
                  <div key={index}>
                     <div className="d-flex align-items-center justify-content-end gap-2 py-3">
                        <p className={`text-white p-2 user-cstm-border ${isDarkMode ? "border-light bg-dark" : "border-dark bg-success"}`}>
                           <strong>Pertanyaan: </strong> <br />
                           {question}
                        </p>
                     </div>

                     <div className={`d-flex align-items-center justify-content-start gap-2 my-3 ${index === chats.length - 1 && "last"}`}>
                        <div className={` text-white p-2 ai-cstm-border ${isDarkMode ? "border-light bg-dark" : "border-dark bg-success"}`}>
                           <strong>Jawaban: </strong> <br />
                           <Markdown>
                              {index === chats.length - 1 ? typing.text : answer}
                           </Markdown>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default ChatContent;
