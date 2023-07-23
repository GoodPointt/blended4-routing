import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getCountries()
      .then(data => setCountries(data))
      .catch(error => console.log(setIsError(error.message)))
      .finally(() => setIsLoading(false));
  }, []);
  console.log(isLoading);
  return (
    <Section>
      {isLoading && <Loader />}
      <Container>
        <h2>Home</h2>
        {isError && <Heading>Opps! {isError}</Heading>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
