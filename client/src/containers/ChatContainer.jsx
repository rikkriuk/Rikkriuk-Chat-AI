import React, { Component } from "react";
import Navbar from "../components/Navbar";
import InputChat from "../components/ChatInput";
import ChatContent from "../components/ChatContent";
import NameInput from "../components/NameInput";
import api from "../utils/api";

export default class ChatContainer extends Component {
   state = {
      chats: [],
      query: "",
      isLoading: false,
      newUser: true,
      username: "",
      typing: {
         text: "",
         index: 0,
         intervalId: null,
      },
      isDarkMode: true,
   }

   componentDidMount() {
      const username = localStorage.getItem("username");
      if (username) {
         this.setState({ username, newUser: false });
      }
   }

   handleNameInputChange = (e) => {
      this.setState({ username: e.target.value })
   }

   handleNameInputSubmit = (e) => {
      e.preventDefault();
      const { username } = this.state;

      if (username.trim() === "") {
         alert("Nama tidak boleh kosong!");
         return;
      }

      this.setState({ newUser: false, username });
      localStorage.setItem("username", username);
   }

   handleChatInputChange = (e) => {
      this.setState({ query: e.target.value })
   }
   
   handleChatInputSubmit = async (e) => {
      e.preventDefault();
      if (this.state.query.trim() === "") {
         alert("Pesan tidak boleh kosong!");
         return;
      }

      const { query } = this.state;

      const data = {
         question: query,
      }

      try {
         this.setState({ isLoading: true });
         const response = await api.post("/query", data);
         const chat = {
            question: query,
            answer: response.data.data,
         };

         this.setState(prevState => ({
            chats: [...prevState.chats, chat],
            query: "",
         }), () => {
            this.startTyping();
         });
      } catch (err) {
         console.log(err);
      } finally {
         this.setState({ isLoading: false, query: "" });
      }
   }

   startTyping = () => {
      const { chats, typing } = this.state;
      const typingSpeed = 10;
   
      const lastChatAnswer = chats[chats.length - 1]?.answer || "";
   
      if (!lastChatAnswer) return;
   
      if (typing.intervalId) {
         clearInterval(typing.intervalId);
      }
   
      this.setState({
         typing: {
            text: "",
            index: 0,
            intervalId: null,
         },
      }, () => {
         let currentIndex = -1;
         const intervalId = setInterval(() => {
            if (currentIndex < lastChatAnswer.length - 1) {
               this.setState(prevState => ({
                  typing: {
                     ...prevState.typing,
                     text: prevState.typing.text + lastChatAnswer[currentIndex],
                     index: currentIndex + 1,
                     intervalId: intervalId,
                  },
               }));
               currentIndex++;
            } else {
               clearInterval(intervalId);
            }
         }, typingSpeed);
      });
   }

   handleChangeTheme = () => {
      this.setState(prevState => ({
         isDarkMode: !prevState.isDarkMode,
      }));
   }
   
   render() {
      return (
         <>
            <header>
               <Navbar  
                  username={this.state.username}
                  isDarkMode={this.state.isDarkMode}
                  onClick={this.handleChangeTheme}
               />
            </header>

            <main>
               {this.state.newUser ? (
                  <NameInput 
                     onChange={this.handleNameInputChange}
                     onSubmit={this.handleNameInputSubmit}
                     isDarkMode={this.state.isDarkMode}
                  />
               ) : (
                  <ChatContent
                     chats={this.state.chats}
                     isLoading={this.state.isLoading}
                     username={this.state.username}
                     typing={this.state.typing}
                     isDarkMode={this.state.isDarkMode}
                  />
               )}
            </main>

            <footer>
               <InputChat 
                  onChange={this.handleChatInputChange} 
                  onSubmit={this.handleChatInputSubmit}
                  isLoading={this.state.isLoading}
                  isDarkMode={this.state.isDarkMode}
                  query={this.state.query}
               />
            </footer>
         </>
      )
   }
}