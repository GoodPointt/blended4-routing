import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setIsLoading] = useState(false);

  const setQueryFromForm = serachTerm => {
    if (!serachTerm.length) return;
    setQuery(serachTerm);
  };

  useEffect(() => {
    if (!query) return;
    const getRegion = async () => {
      try {
        setIsLoading(true);
        const res = await fetchByRegion(query);
        setCountries(res);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRegion();
  }, [query]);

  return (
    <Section>
      <Container>
        <SearchForm setQueryFromForm={setQueryFromForm} />
        {loading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
