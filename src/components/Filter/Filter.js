import { useDispatch } from 'react-redux';
import { changeFilter } from 'components/redux/filtersSlice';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={handleChange}
      ></FilterInput>
    </FilterLabel>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
