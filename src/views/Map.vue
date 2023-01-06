<template>
	<div id="mapid">
	</div>
</template>


<script setup>
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import { onMounted } from 'vue'
import { getMarkers } from '../localStorageManager'
import { useMap } from '../stores/map'

const UKRAINE = [48.27, 32.31]

let map
let popup


const mapStore = useMap()

//при клике на маркер, мы находим конкретный маркер из существующих и получаем его данные
function onMarkerClick(e) {
	const currentMarker = mapStore.markers.filter((mark) => {
		return mark.x === e.latlng.lat && mark.y === e.latlng.lng
	})

	popup
		.setLatLng(e.latlng)
		.setContent(currentMarker[0].title)
		.openOn(map);
}

//при клике на карту, маркер сохраняется в стейт и local storage, и добавляется на карту
function onMapClick(e) {
	const response = mapStore.addMarker(e)
	if (!response) return

	leaflet.marker([e.latlng.lat, e.latlng.lng]).on('click', onMarkerClick).addTo(map);
}

//подключение карты и установка прослушивателя на клик
onMounted(() => {
	map = leaflet.map('mapid').setView(UKRAINE, 6);

	map.on('click', onMapClick);

	leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
})

//получение существующих маркеров из local storage и добавление их всех на карту
onMounted(() => {
	mapStore.markers = getMarkers()

	mapStore.markers.forEach(mark => {
		leaflet.marker([mark.x, mark.y]).on('click', onMarkerClick).addTo(map);
	})
})

//подключение попапа 
onMounted(() => {
	popup = leaflet.popup();
})


</script>

<style scoped>
#mapid {
	height: 100vh;
	width: 100vw;
	min-height: 100px;
	min-width: 100px;
	position: relative;
	z-index: 100;
}

.title {
	margin: 0 0 20px 0;
}
</style>
