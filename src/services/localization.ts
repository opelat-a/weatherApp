/* mock-localization  */
export const Localization: Localization = {
  responseStatus: {
    '404': 'Введен некоректный город',
    '401': 'Проблемы с apiKey',
  },
  searchWeather: 'Узнать Погоду',
  error: 'Возникла ошибка при запросе',
  anotherCity: 'Изменить город',
};

type Localization = {
  responseStatus: {
    [key: string]: string;
  };
  searchWeather: string;
  error: string;
  anotherCity: string;
};
