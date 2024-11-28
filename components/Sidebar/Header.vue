<script setup>
	const props = defineProps({
		to: String,
		img: String,
		label: String,
	});
	const emits = defineEmits(['toggleSidebar']);

	const handleSidebar = () => {
		emits('toggleSidebar');
	}
</script>

<template>
	<div class="flex items-center justify-between gap-2">
		<NuxtLink :to="to" class="flex items-center gap-2 font-semibold text-lg">
			<NuxtImg :src="img" :alt="label" sizes="48px"/>
			Absensi
		</NuxtLink>

		<Button icon="pi pi-align-justify" class="hidden" @click="handleSidebar"></Button>
	</div>
</template>