import styled from 'styled-components';

const LoadingMovieCard = () => {
  const arr = new Array(5).fill(1, 5);
  return arr.map(res => (
    <Container key={`${res}-LoadingCard`}>
      <Front>
        <FrontImg src={'/assets/Spinner.gif'} />
        {/* <FrontImg src={'/assets/Spinner.gif'} /> */}
        ...loading
      </Front>
    </Container>
  ));
};

export default LoadingMovieCard;

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transition: all 0.4s;
  }
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.4s;
  background-color: ${props => props.theme.bgColor};
  &:hover {
    opacity: 0;
  }
`;

const FrontImg = styled.img`
  float: left;
  width: 100%;
  height: 100%;
`;
