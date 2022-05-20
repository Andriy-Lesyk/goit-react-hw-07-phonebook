import React from 'react';
import { useDispatch } from 'react-redux';
import { inputFilter } from '../../redux/store';
import { Input } from './Filter.styles';

function Filter() {
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(inputFilter(e.currentTarget.value));

  return (
    <div>
      <label htmlFor={'filter'}>Find contacts by name</label>
      <Input
        value={inputFilter().payload}
        onChange={changeFilter}
        type="text"
        name="filter"
      />
    </div>
  );
}

export default Filter;
