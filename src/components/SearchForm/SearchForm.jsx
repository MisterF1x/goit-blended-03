import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onHandleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };
  const onHandleChange = evt => {
    setSearchQuery(evt.currentTarget.value);
  };
  return (
    <SearchFormStyled onSubmit={onHandleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        style={{ color: '#f64f59' }}
        value={searchQuery}
        onChange={onHandleChange}
        aria-label="select"
        name="region"
        required
      >
        <option disabled value="">
          Select a region and press enter
        </option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
      </Select>
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
