import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--darkGrey);
  padding: 20px 0;
`

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`

export const Info = styled.div`
  background-color: var(--medGrey);
  padding: 10px 25px;
  border-radius: 50px;
`