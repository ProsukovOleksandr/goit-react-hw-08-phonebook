import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from 'redux/appReducer';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={handleFilter} value={filter} />
    </label>
  );
};
