import { MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
const Sort = ({ handleSort }) => {
  return (
    <>
      <FormControl sx={{ width: '100px' }}>
        <InputLabel id="2">정렬</InputLabel>
        <Select onChange={e => handleSort(e)}>
          <MenuItem value="">정렬</MenuItem>
          <MenuItem value="title_desc">제목 내림차순</MenuItem>
          <MenuItem value="title_asc">제목 오름차순</MenuItem>
          <MenuItem value="release_date_desc">개봉일 내림차순</MenuItem>
          <MenuItem value="release_date_asc">개봉일 오름차순</MenuItem>
          <MenuItem value="popularity_desc">인기도 내림차순</MenuItem>
          <MenuItem value="popularity_asc">인기도 오름차순</MenuItem>
          <MenuItem value="vote_average_desc">평점 내림차순</MenuItem>
          <MenuItem value="vote_average_asc">평점 오름차순</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Sort;
