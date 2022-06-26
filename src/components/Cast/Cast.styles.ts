import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  border-radius: 15px;
  overflow: hidden;

  h3 {
    color: var(--lightGrey);
    font-size: var(--fontBig);
    padding: 5px;
  }

  p {
    font-size: var(--fontSmall);
    padding: 5px;
  }
`
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
`