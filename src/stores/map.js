import { defineStore } from "pinia";
import { saveMarkers } from "../localStorageManager";

export const useMap = defineStore("map", {
  state: () => {
    return {
      markers: [],
    };
  },

  actions: {
    //добавление маркера в общий список
    addMarker(e) {
      const title = prompt("enter name of marker");

      if (!title) return false;

      this.markers.push({
        x: e.latlng.lat,
        y: e.latlng.lng,
        title,
      });

      saveMarkers(this.markers);
      return true;
    },
  },
});
