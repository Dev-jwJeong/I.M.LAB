import { MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { genres } from './../../utils/constant';
const Filter = ({ handleFilter }) => {
  return (
    <>
      <FormControl sx={{ width: '100px' }}>
        <InputLabel id="1">장르</InputLabel>
        <Select label="장르" onChange={e => handleFilter(e)}>
          {/* {genres.map(v, i => {
            <MenuItem value={v.keys()}>v[v.keys()]</MenuItem>;
          })} */}
          <MenuItem value="28">액션</MenuItem>
          <MenuItem value="12">모험</MenuItem>
          <MenuItem value="16">애니메이션</MenuItem>
          <MenuItem value="35">코미디</MenuItem>
          <MenuItem value="80">범죄</MenuItem>
          <MenuItem value="99">다큐멘터리</MenuItem>
          <MenuItem value="18">드라마</MenuItem>
          <MenuItem value="10751">가족</MenuItem>
          <MenuItem value="14">판타지</MenuItem>
          <MenuItem value="36">역사</MenuItem>
          <MenuItem value="27">공포</MenuItem>
          <MenuItem value="10402">음악</MenuItem>
          <MenuItem value="9648">미스터리</MenuItem>
          <MenuItem value="10749">로맨스</MenuItem>
          <MenuItem value="878">SF</MenuItem>
          <MenuItem value="10770">TV영화</MenuItem>
          <MenuItem value="53">스릴러</MenuItem>
          <MenuItem value="10752">전쟁</MenuItem>
          <MenuItem value="37">서부</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Filter;
