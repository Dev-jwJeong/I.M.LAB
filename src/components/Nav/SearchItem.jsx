import React from 'react';
import styled from 'styled-components';

const SearchItem = ({ item }) => {
  return (
    <MovieItemBox href={'/movieDetail/' + item.id}>
      <TextWrapper>
        <Text>{item.name || item.title}</Text>
        <Text>({item.original_name || item.original_title})</Text>
      </TextWrapper>
      {item.backdrop_path ? (
        <Img src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path}></Img>
      ) : null}
    </MovieItemBox>
  );
};
const Img = styled.img`
  height: 40px;
`;
const MovieItemBox = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 3px;
  border-bottom: 1px solid;
`;
const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Text = styled.div`
  font-size: 14px;
`;

export default SearchItem;
