import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: var(--medGrey);
  max-height: auto;

`

export const Content = styled.div`
  color: var(--white);
  max-width: var(--maxWidth);
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.2rem;
  padding: 10px;

  span {
    color: var(--white);
  }

  @media (max-width: 600px) {
    font-size: var(--fontSmall);
  }
`