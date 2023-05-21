import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from 'routes';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(({ id, flag, country }) => (
        <GridItem key={id}>
          <Link to={`${routes.COUNTRY}/${id}`} state={{ from: location }}>
            <img src={flag} alt={country} />
          </Link>
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
