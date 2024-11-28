<script setup>
	defineProps({
		menubar: Array
	});
</script>

<template>
	<nav class="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
		<div v-for="item in menubar" :key="item.label">
			<h3>{{ item.label }}</h3>

			<ul>
				<li v-for="listItems in item.list" :key="listItems.name">{{ listItems.name }}</li>
			</ul>
		</div>
	</nav>
</template>