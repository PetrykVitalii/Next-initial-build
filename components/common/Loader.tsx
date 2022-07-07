import styled, { keyframes } from 'styled-components';

const Loader: React.FC = () => (
  <LoaderStyled>
    <Wave />
    <Wave />
    <Wave />
    <Wave />
    <Wave />
    <Wave />
    <Wave />
    <Wave />
    <Wave />
    <Wave />
  </LoaderStyled>
);

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const wave = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Wave = styled.div`
  width: 5px;
  height: 100px;
  background: linear-gradient(45deg, #5e0a0a, #fff);
  margin: 10px;
  animation: ${wave} 1s linear infinite;
  border-radius: 20px;

  :nth-child(2) {
    animation-delay: 0.1s;
  }
  :nth-child(3) {
    animation-delay: 0.2s;
  }
  :nth-child(4) {
    animation-delay: 0.3s;
  }
  :nth-child(5) {
    animation-delay: 0.4s;
  }
  :nth-child(6) {
    animation-delay: 0.5s;
  }
  :nth-child(7) {
    animation-delay: 0.6s;
  }
  :nth-child(8) {
    animation-delay: 0.7s;
  }
  :nth-child(9) {
    animation-delay: 0.8s;
  }
  :nth-child(10) {
    animation-delay: 0.9s;
  }
`;

export default Loader;
