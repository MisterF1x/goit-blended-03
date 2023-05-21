import { Grid, GridItem } from 'components';
import PropTypes from 'prop-types';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, flag, country }) => (
        <GridItem key={id}>
          <img src={flag} alt={country} />
        </GridItem>
      ))}
    </Grid>
  );
};
CountryList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
