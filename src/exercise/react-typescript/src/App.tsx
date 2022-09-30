import axios from 'axios';
import React, { useEffect } from 'react';
import {
  Button,
  Container,
  CountryItem,
  Input,
  Loading,
  Status
} from './components';
import { useInput } from './hooks/useInput';
import { ICountry } from './types';

function App() {
  const [countries, setCountries] = React.useState<ICountry[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [search, setSearch] = React.useState<string>('');

  const INITIAL_VALUE = {
    name: '',
    surname: '',
    email: '',
    password: ''
  };

  const [inputs, setInputs] = useInput(INITIAL_VALUE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

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
      {/* Container component*/}
      <Container styles={{ padding: '2rem' }}>
        {/* Input component */}
        <Input value={search} onChange={handleChange} />
        {/* Status component */}
        <Status status='info' />
        {/* Button component */}
        <Button title='Click Me!' onClick={() => console.log('Clicked!')} />
        {/* use Input Elements */}
        <form>
          <input
            type='text'
            name='name'
            value={inputs.name}
            onChange={setInputs}
          />
          <input
            type='text'
            name='surname'
            value={inputs.surname}
            onChange={setInputs}
          />
          <input
            type='text'
            name='email'
            value={inputs.email}
            onChange={setInputs}
          />
          <input
            type='text'
            name='password'
            value={inputs.password}
            onChange={setInputs}
          />
        </form>
        {/* Loading component*/}
        <Loading loading={loading}>
          {countries.map(country => (
            <CountryItem key={country.name.common} country={country} />
          ))}
        </Loading>
      </Container>
    </div>
  );
}

export default App;
