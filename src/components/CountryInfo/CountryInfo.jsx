import PropTypes from 'prop-types';
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

export const CountryInfo = ({
  countryInfo: { flag, capital, countryName, languages = [], population },
}) => {
  return (
    <CountryWrapper>
      <Flag>
        <Image src={flag} alt={countryName} />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital}</Accent>
        </CountryCapital>

        <CountryTitle>
          {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        </CountryTitle>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languages.join(', ')}.</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
  );
};

CountryInfo.propTypes = {
  countryInfo: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    capital: PropTypes.arrayOf(PropTypes.string).isRequired,
    countryName: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
    population: PropTypes.number.isRequired,
  }).isRequired,
};
