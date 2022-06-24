import styled from "styled-components"

export const Wrapper = styled.div`
  background: url(${({image}) => image}) no-repeat center ;
  background-size: cover;
  height: 600px;
  animation: animateHeroImg 2s;

  background-attachment: fixed;
    
  position: relative;
  z-index: 0;

  :before {
    background: rgba(0, 0, 0, 0.4);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  
  @keyframes animateHeroImg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  }

  @media (max-width: 1100px) {
    background-position-y: top;
  }

  @media (max-width: 700px) {
    height: 500px;
  }

  @media (max-width: 500px) {
    height: 350px;
  }
`

export const Content = styled.div`
  max-width: var(--maxWidth);
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 10px;
  }

`

export const Text = styled.div`
  max-width: 700px;
  min-width: 200px;

  h1 {
    font-size: var(--fontSuperBig);
    margin-bottom: 50px;
  }

  @media (max-width: 1100px) {
    max-width: 600px;
  }

  @media (max-width: 900px) {
    max-width: 500px;

    h1 {
    margin-bottom: 30px;
  }
  }

  @media (max-width: 700px) {
    max-width: 300px;

    h1 {
      font-size: var(--fontMed);
      margin-bottom: 20px;
    }

    p {
      font-size: var(--fontSmall);
    }
  }
`
