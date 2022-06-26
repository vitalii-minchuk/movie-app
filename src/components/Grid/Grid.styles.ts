import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  padding: 20px;
  margin: 0 auto;

  h1 {
    color: var(--medGrey);
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: var(--fontBig);
    }
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`