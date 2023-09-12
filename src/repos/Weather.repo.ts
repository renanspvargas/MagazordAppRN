import axios from 'axios';
import {WeatherDetails} from '../models/WeatherDetails.model';

export async function getWeatherDetails(
  value: string,
): Promise<WeatherDetails> {
  const url = `https://api.weatherapi.com/v1/current.json?key=634717cf5a50498f851120209231009&q=${value}`;
  const res = await axios.get(url);
  const obj = res.data;
  return obj;
}
