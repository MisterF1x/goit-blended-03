import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks/useFetchCountries';

export const Home = () => {
  const { countries, error, isLoading } = useFetchCountries();
  return (
    <Section>
      <Container>
        {error && <Heading textAlign="center">Something went wrong...</Heading>}
        {isLoading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
