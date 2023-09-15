import { Box, CssBaseline, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from 'redux/appReducer';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <CssBaseline />
      <Box component="form" autoComplete="off">
        <TextField type="text" onChange={handleFilter} value={filter} label = "Find contacts by name" />
      </Box>
    </>
  );
};
