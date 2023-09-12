export type WeatherDetails = {
  location: WeatherDetailsLocationModel;
  current: WeatherDetailsCurrentModel;
};

type WeatherDetailsLocationModel = {
  name: string;
  country: string;
};

type WeatherDetailsCurrentModel = {
  temp_c: number;
  condition: WeatherDetailsCurrentConditionModel;
};

type WeatherDetailsCurrentConditionModel = {
  text: String;
};
