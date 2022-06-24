import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--darkGrey);
  height: 100px;
  padding: 0 20px;
`

export const Content = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  height: 60px;
  background-color: var(--medGrey);
  border-radius: 40px;
  position: relative;
  margin: 0 auto;
  

  img {
    position: absolute;
    width: 30px;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }

  input {
    position: absolute;
    width: auto;
    top: 50%;
    left: 70px;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    font-size: var(--fontMed);
    outline: none;
    color: var(--white);
  }

`