export default (cities) => {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
};

export function selectCity(city) {
  return {
    type: 'SELECT_CITY',
    payload: city
  };
}

export function ActiveShowCity(city) {
  return {
    type: 'ACTIVE_CITY',
    payload: city
  };
}
