import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchUpcomingMovie } from '../../api/api';
import MovieCardList from '../../components/common/MovieCard/MovieCardList';
import MovieCardGridBox from '../../components/common/MovieCard/GridBox';
import sortBy from '../../utils/sort';
import Sort from '../../components/filter/sort';
import Filter from '../../components/filter/filter';
import styled from 'styled-components';

const Upcoming = () => {
  const { ref, inView } = useInView();
  let pageIndex = 0;
  const [isSorted, setIsSorted] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [totalUpcomingMovies, setTotalUpcomingMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState(totalUpcomingMovies);
  const [filteredMovies, setFilteredMovies] = useState(sortedMovies);
  const [total, setTotal] = useState(0);
  const {
    status,
    data: upcomingMoviePage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['infinite', 'upcoming'],
    ({ pageParam = 1 }) => fetchUpcomingMovie(pageParam),
    {
      getNextPageParam: lastPage => {
        return lastPage.page + 1;
      },
    }
  );

  const getTMDB = async page => {
    const res = await fetchUpcomingMovie(page);
    if (!total) {
      if (res.total_pages > 100) {
        setTotal(100);
      } else {
        setTotal(res.total_pages);
      }
    }
    res.results.forEach(v => setTotalUpcomingMovies(prev => [...prev, v]));
  };

  const handleSort = e => {
    setIsSorted(false);
    setSortedMovies([]);
    if (!e.target.value) return;
    const sortResult = sortBy(totalUpcomingMovies, e.target.value);
    setSortedMovies(prev => [...prev, sortResult.slice(pageIndex * 20, pageIndex * 20 + 20)]);
    setIsSorted(true);
  };

  const handleFilter = e => {
    setIsFiltered(false);
    setFilteredMovies([]);
    if (!e.target.value) return setIsFiltered(false);
    const filterResult = totalUpcomingMovies
      .map(movie => {
        return movie.genre_ids.includes(parseInt(e.target.value)) ? movie : null;
      })
      .filter(a => a);
    // setIsSearch(true);
    setFilteredMovies(prev => [...prev, filterResult.slice(pageIndex * 20, pageIndex * 20 + 20)]);
    setIsFiltered(true);
  };

  useEffect(() => {
    getTMDB();
  }, []);

  useEffect(() => {
    if (total) {
      setTotalUpcomingMovies([]);
      for (let i = 1; i < total + 1; i++) {
        getTMDB(i);
      }
    }
  }, [total]);
  useEffect(() => {
    if (status === 'loading') return;
    if (!hasNextPage) {
      alert('마지막 페이지입니다.');
      return;
    }
    if (inView) {
      fetchNextPage();
      pageIndex++;
    }
  }, [inView]);
  return (
    <Container>
      <Title>Upcoming Movies</Title>
      {status === 'loading' ? (
        <>Loading...</>
      ) : (
        <MovieListBox>
          <SelectWrapper>
            <Sort handleSort={handleSort} />
            <Filter handleFilter={handleFilter} />
          </SelectWrapper>
          {isSorted ? (
            <MovieCardGridBox>
              {sortedMovies.map((res, i) => (
                <MovieCardList MovieListValue={res} key={`${i * 2000}-cardList`} />
              ))}
            </MovieCardGridBox>
          ) : isFiltered ? (
            <MovieCardGridBox>
              {filteredMovies.map((res, i) => (
                <MovieCardList MovieListValue={res} key={`${i * 2000}-cardList`} />
              ))}
            </MovieCardGridBox>
          ) : (
            <MovieCardGridBox>
              {upcomingMoviePage.pages.map(res => (
                <MovieCardList MovieListValue={res.results} key={`${res.page}-cardList`} />
              ))}
            </MovieCardGridBox>
          )}

          <div ref={ref}>{inView}</div>
        </MovieListBox>
      )}
    </Container>
  );
};
const Container = styled.div`
  padding: 32px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-top: 32px;
`;
const MovieListBox = styled.div``;
const SelectWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 16px;
  margin-right: 16px;
  gap: 16px;
`;

export default Upcoming;
