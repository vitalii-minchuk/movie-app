import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 0 20px;

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 16px 0;

  @media (max-width: 600px) {
    padding: 8px 0;
  }
`

export const LogoImg = styled.img`
  width: 150px;

  @media (max-width: 600px) {
    width: 100px;
  }
`

export const TMDBLogoImg = styled.img`
  width: 150px;

  @media (max-width: 600px) {
    width: 100px;
  }
`