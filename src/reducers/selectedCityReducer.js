const selectedCityReducer = (state = {}, action) => {
// compute and return the new state
  //  TODO handle action
  switch (action.type) {
    case 'SELECT_CITY': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
// handleaandle action
};

export default selectedCityReducer;

