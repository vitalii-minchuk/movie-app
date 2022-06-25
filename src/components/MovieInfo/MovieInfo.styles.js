import styled from "styled-components"

export const Wrapper = styled.div`
  background: url(${({backdrop}) => backdrop}) no-repeat center ;
  background-size: cover;
  padding: 20px;
  animation: animateMovieInfo 2s;

  @keyframes animatedMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
`

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: var(--maxWidth);
  min-height: 500px;
  position: relative;
  overflow: hidden;
  z-index: 5;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media (max-width: 712px) {
    display: block;
  }
`

export const Image = styled.img`
  width: 300px;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 712px) {
    width: 100%;
  }
`

export const Text = styled.div`
  width: 100%;
  padding: 10px 20px;
  color: var(--white);
  overflow: hidden;
  flex: 60%;

  .description {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #fff;
    color: #000;
    font-size: var(--fontSmall);
    font-weight: 800;
    border-radius: 50%;
    margin: 5px auto;
  }
  .directors {
    margin: 0 0 60px 40px;
    p {
      margin: 0;
    }
  }
  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

  button {
    display: block;
    font-size: var(--fontMed);
    font-weight: 600;
    color: var(--darkGrey);
    background-color: var(--white);
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    transition: all .3s;
    margin-bottom: 15px;
    
    :hover {
      filter: brightness(0.7);
    }
  }
`
