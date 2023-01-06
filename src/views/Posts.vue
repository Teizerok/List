<template>
	<h1 class="title">List</h1>
	<div class="controller">
		<div class="controller__filter">
			<input class="controller__field" v-model="filter" placeholder="filter for title..." type="text">
		</div>

		<div class="controller__paggination">
			<button @click="onPrevPage">prev</button>
			<button @click="onNextPage">next</button>
			<p>{{ page }}</p>
		</div>
	</div>

	<List :posts="paginationedPosts" />
</template>


<script setup>
import { usePosts } from '../stores/posts'
import { ref, onMounted, computed, watch } from 'vue'
import List from '../components/List.vue'
const PAGE_SIZE = 10

const postStore = usePosts()

const filter = ref('')
const page = ref(1)

//фльтрация списка по строке фильтра
const filteredPosts = computed(() => {
	return postStore.posts.filter(post => {
		return post.title.includes(filter.value)
	})
})

//пагинация отфильтрованого списка
const paginationedPosts = computed(() => {
	const start = PAGE_SIZE * (page.value - 1)
	const end = PAGE_SIZE * (page.value)

	return filteredPosts.value.slice(start, end)
})


const onPrevPage = () => {
	if (page.value <= 1) return
	page.value--
}

const onNextPage = () => {
	//если существует елементы для след. страницы, то переключаем 
	const isNextPage = page.value * PAGE_SIZE < filteredPosts.value.length

	if (!isNextPage) return
	page.value++
}


watch(filter, () => {
	page.value = 1
})


onMounted(() => {
	postStore.getPosts()
})

</script>

<style scoped>
.title {
	margin: 0 0 20px 0;
	padding: 20px 0 0 0;
	color: #222;
}

.controller {
	margin: 0 0 60px 0;
}

.controller__description {
	color: #222;
	font-size: 15px;
	padding: 0 20px 0 0;
	display: block;
	text-align: center;
}

.controller__field {
	background-color: #aaa;
	height: 24px;
	border-radius: 2px;
	padding: 0 10px;
	color: #fff;
}


.controller__field::placeholder {
	color: rgb(229, 229, 229);
}

.controller__filter {
	margin: 0 0 30px 0;
}

.controller__paggination {
	text-align: center;
}

.controller__paggination button {
	margin: 0 10px;

}

.controller__paggination p {
	color: #222;
}
</style>
