const initialState = {
  coordinates: {lat: '', lng: ''},
  clickedLocations: [],
  pictures: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_COORDINATES':
      return {
        ...state,
        coordinates: action.payload,
      };
    case 'ADD_TO_CLICKED_LOCATIONS':
      return {
        ...state,
        clickedLocations: [...state.clickedLocations, action.payload],
      };
    case 'ADD_TO_PICTURES':
      return {
        ...state,
        pictures: [...state.pictures, action.payload],
      };
    case 'SET_PICTURES':
      return {
        ...state,
        pictures: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
