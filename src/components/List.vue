<template>
	<div class="list">
		<div v-for="post in posts" class="list__element">
			<h3 class="list__title">{{ post.title }}</h3>
			<p class="list__content">{{ post.body }}</p>
		</div>
	</div>
</template>


<script setup>
const props = defineProps({
	posts: Array
})

</script>

<style scoped>
.list__element {
	margin: 0 0 80px 0;
	width: 400px;
	text-align: center;
}

.list__title {
	color: #222;
	font-size: 20px;
	margin: 0 0 20px 0;
	text-transform: capitalize;
}

.list__content {
	color: #aaa;
	line-height: 1.4;

}
</style>
