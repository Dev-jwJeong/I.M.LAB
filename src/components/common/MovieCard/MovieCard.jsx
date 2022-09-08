import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MovieCard = ({ CardData }) => {
  const [movieCardDate, setMovieCardDate] = useState('');
  useEffect(() => {
    setMovieCardDate(CardData);
  }, [CardData]);
  return (
    <>
      {movieCardDate ? (
        <ATag href={`/movieDetail/${movieCardDate.id}`}>
          <Container>
            <Front>
              <FrontImg
                src={
                  movieCardDate.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieCardDate.poster_path}`
                    : '/assets/TKL.png'
                }
              />
            </Front>
            <Back>
              <MovieHeader>
                <Img src={`https://image.tmdb.org/t/p/w500${movieCardDate.poster_path}`} />
                <Title>{movieCardDate.title || movieCardDate.name}</Title>
                <MovieMadeAt>{movieCardDate.release_date}</MovieMadeAt>
                <Rate>평점 {movieCardDate.vote_average}</Rate>
              </MovieHeader>
              <Desc>
                <Overview>{movieCardDate.overview}</Overview>
              </Desc>
            </Back>
          </Container>
          <MovieTitle>{movieCardDate.title || movieCardDate.name}</MovieTitle>
        </ATag>
      ) : (
        <Container>
          <Front>
            <FrontImg src={'/assets/Spinner.gif'} />
          </Front>
        </Container>
      )}
    </>
  );
};

export default MovieCard;

const ATag = styled.a`
  cursor: pointer;
`;

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
  &:hover {
    opacity: 0;
  }
`;

const FrontImg = styled.img`
  float: left;
  width: 100%;
  height: 100%;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
  transition: all 0.4s;
  background: linear-gradient(to right, rgba(26, 25, 28, 0.95) 100%, transparent 100%);
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

const Rate = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #959595;
  margin-top: 12px;
  @media (max-width: 722px) {
    font-size: 16px;
  }
`;

const MovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;
  width: 100%;
`;

const Title = styled.div`
  color: #959595;
  font-weight: 400;
  font-size: 18px;
`;

const MovieTitle = styled.h1`
  color: black;
  font-weight: 400;
  width: 100%;
  font-size: 18px;
  padding-top: 15px;
  text-align: center;
`;

const MovieMadeAt = styled.h4`
  color: #555;
  font-weight: 400;
  font-size: 14px;
`;

const Overview = styled.p`
  display: -webkit-box !important;
  color: #959595;
  margin-top: 5px;
  font-size: 13px;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 9;
`;

const Img = styled.img`
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
  @media (max-width: 722px) {
    height: 100%;
  }
`;

const Desc = styled.div`
  padding: 25px;
  height: 60%;
  width: 100%;
  @media (max-width: 722px) {
    height: 100%;
    padding: 0px 25px;
  }
`;
