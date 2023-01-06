<template>
	<nav class="navigaition">
		<router-link to="/">Go to List</router-link>
		<router-link to="/map">Go to map</router-link>
	</nav>

	<main class="content">
		<router-view></router-view>
	</main>

</template>



<style scoped>
.navigaition {
	background-color: black;
	padding: 20px;
	position: relative;
	z-index: 1000;
}

a {
	color: #fff;
	padding: 0 20px;
}

a:hover {
	color: rgb(176, 176, 176);
	padding: 0 20px;
}

.content {
	width: 500px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

}
</style>