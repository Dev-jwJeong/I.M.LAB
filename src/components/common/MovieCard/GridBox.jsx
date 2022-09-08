import styled from 'styled-components';

const MovieCardGridBox = styled.div`
  display: grid;
  background-color: ${props => props.theme.bgColor};
  grid-template-columns: repeat(5, minmax(230px, auto));
  max-width: 100%;
  gap: 80px 10px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, auto));
  }
`;

export default MovieCardGridBox;
