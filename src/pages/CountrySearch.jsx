import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchByRegion } from 'hooks/useFetchByRegion';

export const CountrySearch = () => {
  const { countries, error, isLoading, onHandleSubmit } = useFetchByRegion();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        {error && <Heading textAlign="center">Something went wrong...</Heading>}
        {isLoading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
