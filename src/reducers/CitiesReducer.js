const CitiesReducer = (state = [], action) => {
// compute and return the new state
  //  TODO handle action
  switch (action.type) {
    case 'SET_CITIES': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default CitiesReducer;
