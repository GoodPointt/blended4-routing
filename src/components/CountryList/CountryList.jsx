import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.length > 0 &&
        countries.map(({ id, country, flag }) => {
          return (
            <GridItem key={id}>
              <Link state={{ from: location }} to={`${routes.COUNTRY}/${id}`}>
                <img src={flag} alt={country} />
              </Link>
            </GridItem>
          );
        })}
    </Grid>
  );
};
