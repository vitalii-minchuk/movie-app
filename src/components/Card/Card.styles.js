import styled from "styled-components"

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  border-radius: 20px;
  object-fit: cover;
  animation: animateCard 2s;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.6);
  }


  @keyframes animateCard {
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  }
`