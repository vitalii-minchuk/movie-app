import styled from "styled-components"

export const Wrapper = styled.div`
  background: url(${({backdrop}) => backdrop}) no-repeat center ;
  background-size: cover;
  padding: 40px 20px;
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
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media (max-width: 900px) {
    display: block;
  }
`

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
  flex: 60%;
  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }
  .director {
    margin: 0 0 0 40px;
    p {
      margin: 0;
    }
  }
  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`
