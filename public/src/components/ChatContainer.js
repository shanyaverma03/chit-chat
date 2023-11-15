import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Logout from "./Logout";
import ChatInput from "./ChatInput";
import { sendMessageRoute, getAllMessagesRoute } from "../utils/APIRoutes";

export default function ChatContainer({ currentChat, currentUser }) {
  const [messages, setMessages] = useState([]);

  const getAllMessages = async () => {
    try {
      const response = await axios.get(getAllMessagesRoute, {
        params: {
          from: currentUser._id,
          to: currentChat._id,
        },
      });
      console.log(response);
      setMessages(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllMessages();
  }, [currentChat, messages]);

  const msgSendHandler = async (msg) => {
    try {
      await axios.post(sendMessageRoute, {
        from: currentUser._id,
        to: currentChat._id,
        message: msg,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {currentChat && (
        <Container>
          <div className="chat-header">
            <div className="user-details">
              <div className="avatar">
                <img
                  src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                  alt="avatar"
                />
              </div>
              <div className="username">
                <h3>{currentChat.username}</h3>
              </div>
            </div>
            <Logout />
          </div>
          <div className="chat-messages">
            {messages.map((message) => {
              return (
                <div>
                  <div
                    className={`message ${
                      message.fromSelf ? "sent" : "received"
                    }`}
                  >
                    <div className="content">
                      <p>{message.message}</p>
                      <p>{message.fromSelf}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ChatInput handleSendMsg={msgSendHandler} />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sent {
      justify-content: flex-end;
      .content {
        color: white;
        background-color: #d6536d;
      }
    }
    .received {
      justify-content: flex-start;
      .content {
        color: black;
        background-color: #ebe9e1;
      }
    }
  }
`;
