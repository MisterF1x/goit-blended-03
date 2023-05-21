import {
  GoBackBtn,
  Section,
  Container,
  CountryInfo,
  Loader,
  Heading,
} from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { country, error, isLoading } = useFetchCountry();
  const location = useLocation();
  const goBackLink = location?.state?.from ?? routes.HOME;
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Back to countries</GoBackBtn>
        {isLoading && <Loader />}
        {error && <Heading textAlign="center">Something went wrong...</Heading>}
        {country && <CountryInfo countryInfo={country} />}
      </Container>
    </Section>
  );
};
