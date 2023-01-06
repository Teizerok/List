const MARKERS = "markers";

export const saveMarkers = (data) => {
  localStorage.setItem(MARKERS, JSON.stringify(data));
};

export const getMarkers = () => {
  return JSON.parse(localStorage.getItem(MARKERS));
};
