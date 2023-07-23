import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from 'routes';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Header />}>
        <Route index element={<Home />} />
        <Route path={routes.COUNTRY} element={<CountrySearch />} />
        <Route path={routes.COUNTRY_ID} element={<Country />} />
        <Route path="*" element={<Navigate to={routes.HOME} replace={true} />} />
      </Route>
    </Routes>
  );
};
