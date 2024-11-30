<script setup>
	const props = defineProps({
		to: String,
		img: String,
		label: String,
	});
</script>

<template>
	<div class="flex items-center justify-between gap-2">
		<NuxtLink :to="to" class="flex items-center gap-2 font-semibold text-lg">
			<NuxtImg :src="img" :alt="label" sizes="48px"/>
			Absensi
		</NuxtLink>
	</div>
</template>