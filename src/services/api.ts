import {apiKey} from './apiKey';

/* по хорошему вынести url и переменные в query так же в аргументы*/

export const apiGetWeatherWithName = async (city: string): Promise<Response> =>
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`,
  );
