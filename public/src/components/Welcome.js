import styled from "styled-components";
import Hello from "../assets/hello.gif";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Hello} alt="hello" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 18rem;
    padding: 1rem;
  }
  span {
    color: #d6536d;
  }
`;
