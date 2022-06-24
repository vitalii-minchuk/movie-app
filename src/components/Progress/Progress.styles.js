import styled from "styled-components"

export const Spinner = styled.div`
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--darkGrey);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`