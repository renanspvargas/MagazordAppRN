import {useState} from 'react';
import {WeatherDetails} from '../../../models/WeatherDetails.model';
import {getWeatherDetails} from '../../../repos/Weather.repo';

export function useWeather() {
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState({
    message: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function getWeatherDataForInput(value: string) {
    setIsLoading(true);
    getWeatherDetails(value)
      .then(value => {
        setIsLoading(false);
        setWeatherDetails(value);
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMessage({
          message:
            'Não foi possível completar a busca, por favor, tente outro valor ou tente novamente mais tarde',
        });
      });
  }

  return {getWeatherDataForInput, errorMessage, isLoading, weatherDetails};
}
