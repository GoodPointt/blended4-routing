import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({ countryObj: { flag,
  capital,
  country,
  id,
  languages = [],
  population } }) => {

  return (
    <CountryWrapper key={id}>
      <Flag>
        <Image src={flag} alt={country} />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital}</Accent>
        </CountryCapital>

        <CountryTitle>{country}</CountryTitle>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languages.join(', ')}</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
  );
};
