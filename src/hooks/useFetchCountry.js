import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const useFetchCountry = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getCountry = async () => {
      try {
        const country = await fetchCountry(id);
        setCountry(country);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCountry();
  }, [id]);
  return { country, error, isLoading };
};
