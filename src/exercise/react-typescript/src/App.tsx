import axios from 'axios';
import React, { useEffect } from 'react';
import { CountryItem, Loading } from './components';
import { ICountry } from './types';

function App() {
  const [countries, setCountries] = React.useState<ICountry[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchCountries = async () => {
    try {
      const { data } = await axios.get<ICountry[]>(
        'https://restcountries.com/v3.1/all'
      );
      setCountries(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className='App'>
      <Loading loading={loading}>
        {countries.map(country => (
          <CountryItem key={country.name.common} country={country} />
        ))}
      </Loading>
    </div>
  );
}

export default App;
