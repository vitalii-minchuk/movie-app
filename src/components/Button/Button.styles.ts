import styled from "styled-components"

export const Wrapper = styled.button`
  display: block;
  background-color: var(--darkGrey);
  color: var(--white);
  font-size: var(--fontBig);
  max-width: 700px;
  width: 100%;
  margin: 20px auto 40px;
  padding: 8px 24px;
  border-radius: 40px;
  cursor: pointer;
  transition: all .3s;
  border: none;

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 800px) {
    max-width: 300px;
  }
`