import React from 'react';
import { ICountry } from '../types';

interface ICountryItemProps {
  country: ICountry;
}

const CountryItem: React.FC<ICountryItemProps> = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Timezones: {country.timezones}</p>
      <p>Top level domain: {country.tld}</p>
      <p>Alt spellings: {country.altSpellings}</p>
      <p>Alpha 2 code: {country.cca2}</p>
      <p>Alpha 3 code: {country.cca3}</p>
      <p>Country code: {country.ccn3}</p>
      <p>Independent: {country.independent ? 'Yes' : 'No'}</p>
      <p>Flag: {country.flag}</p>
    </>
  );
};

export default CountryItem;
