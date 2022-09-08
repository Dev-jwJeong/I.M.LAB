import React from 'react';
import styled from 'styled-components';
import SearchBar from 'material-ui-search-bar';
import Collapse from '@mui/material/Collapse';
import _ from 'lodash';
import { fetchSearch, fetchTranding } from '../../api/api';
import SearchItem from './SearchItem';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [searchWord, setSearchWord] = React.useState('');
  const [searchSubject, setsearchSubject] = React.useState('실시간 트랜드');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleClick = bool => {
    if (bool) keyPress(searchWord);
    setOpen(bool);
  };

  const getSearch = _.debounce(keyword => {
    if (keyword === '') return getTrand();
    return fetchSearch(keyword, 1).then(result => {
      if (result.results.length === 0) return getTrand('실시간 트랜드');
      setsearchSubject('연관 검색어');
      return setSearchResults(result.results.slice(0, 10));
    });
  }, 200);

  const getTrand = text => {
    fetchTranding().then(result => {
      setsearchSubject('실시간 트랜드');
      return setSearchResults(result.results.slice(0, 10));
    });
  };

  const keyPress = React.useCallback(getSearch, []);

  const onChange = value => {
    setSearchWord(value);
    keyPress(value);
  };

  const onRequestSearch = value => {
    navigate({
      pathname: `/search`,
      search: `?${createSearchParams({ value })}`,
    });
  };

  return (
    <>
      <Container>
        <NavBox>
          <RouterBox>
            <LogoBox href="/">
              <LogoImg src="/assets/TKL.png" />
            </LogoBox>
            <MenuBox>
              <Menu href="/now_playing">nowplaying</Menu>
              <Menu href="/upcoming">upcoming </Menu>
              <Menu href="/top_rated">toprated</Menu>
              <Menu href="/nowplaying">NowPlaying</Menu>
              <Menu href="/upcoming">Upcoming </Menu>
              <Menu href="/toprated">TopRated</Menu>
            </MenuBox>
          </RouterBox>
          <UserBox>
            <SearhBox>
              <SearchBar
                value={searchWord}
                onRequestSearch={e => onRequestSearch(e)}
                onCancelSearch={e => onChange('')}
                onChange={e => onChange(e)}
                onFocus={() => handleClick(true)}
                onBlur={() => handleClick(false)}
              />
            </SearhBox>
          </UserBox>
        </NavBox>
      </Container>
      <CollapseBox>
        <CollapseWrapper>
          <Collapse in={open} orientation="vertical">
            <SearchModal>
              <SearchSubject>{searchSubject}</SearchSubject>
              <SearchResults>
                {searchResults.map((item, i) => (
                  <SearchItem item={item} key={'searchItem' + i} />
                ))}
              </SearchResults>
            </SearchModal>
          </Collapse>
        </CollapseWrapper>
      </CollapseBox>
    </>
  );
};
const SearchSubject = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  border-bottom: 1px solid ${props => props.theme.subBgColor};
  padding: 0 3rem;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;
const CollapseBox = styled.div`
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1000;
`;
const CollapseWrapper = styled.div`
  width: 1300px;
  display: flex;
  justify-content: flex-end;
`;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 1300px;
`;
const LogoBox = styled.div``;
const LogoImg = styled.img`
  display: block;
  margin: auto 0px;
  width: 80px;
  height: 80px;
`;
const RouterBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`;
const Menu = styled.a`
  padding: 5px;
`;
const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`;
const SearhBox = styled.div`
  padding: 5px;
`;
const SearchModal = styled.div`
  width: 600px;
  padding: 10px;
  margin-right: 5px;
  background-color: ${props => props.theme.subBoxColor};
`;
const SearchResults = styled.div``;
export default Nav;
