import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';


export const Country = () => {

  const [countryObj, setCountryName] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(null)
  const location = useLocation();

  const goBackHref = location?.state?.from ?? "/"

  useEffect((() => {
    const getCountryByName = async () => {
      try {
        setIsLoading(true)
        const res = await fetchCountry(id);
        setCountryName(res)

      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    getCountryByName()
  }), [id])



  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackHref}>Go Back</GoBackBtn>
        {isLoading && <Loader />}
        <CountryInfo countryObj={countryObj} />
      </Container>
    </Section>
  );
};
