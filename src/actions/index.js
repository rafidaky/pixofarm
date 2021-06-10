export const login = () => {
  return {
    type: 'LOG_IN',
  };
};
export const setCoordinates = position => {
  return {
    type: 'SET_USER_COORDINATES',
    payload: {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    },
  };
};
export const addToClickedLocations = location => {
  return {
    type: 'ADD_TO_CLICKED_LOCATIONS',
    payload: location,
  };
};
export const addToPictures = picture => {
  return {
    type: 'ADD_TO_PICTURES',
    payload: picture,
  };
};
export const setPictures = pictures => {
  return {
    type: 'SET_PICTURES',
    payload: pictures,
  };
};
