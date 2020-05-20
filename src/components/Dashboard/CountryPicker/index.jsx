import React, { useEffect, useState, useCallback } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { fetchCountries } from '../../../api';
import TextField from '@material-ui/core/TextField';
import { fetchAPIDataCountries } from '../../../api';
import { requestDataCountry } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
const CountryPicker = () => {
 const [country, setCountry] = useState([]);

 useEffect(() => {
  const fetchAPI = async () => {
   let dataCountry = await fetchAPIDataCountries();
   setCountry(dataCountry);
  };
  fetchAPI();
 }, []);
 const dispatch = useDispatch();

 return (
  <Autocomplete
   id="country"
   options={country}
   onChange={(event, newValue) => newValue && dispatch(requestDataCountry(newValue))}
   getOptionLabel={(option) => option.name}
   style={{ width: 300 }}
   renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
  />
 );
};
export default CountryPicker;
