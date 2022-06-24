import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  padding: 20px;
  margin: 0 auto;

  h1 {
    color: var(--medGrey);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: var(--fontBig);
    }
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  overflow-x: scroll;
  overflow-y: visible;
  padding: 10px 0 20px;

  


  * {
    height: 250px;
    width: 180px
  }

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: orange;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: 3px solid orange;
  }
`