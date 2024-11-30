<script setup>
    const props = defineProps({
        dashboardLink : String,
        img: String,
        alt: String
    })
	const emits = defineEmits(['toggleSidebar']);

    const handleSidebar = () => {
		emits('toggleSidebar');
	}
    
</script>

<template>
    <header class="sticky top-0 z-50 flex w-full bg-white shadow-md">
        <div class="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
            <!-- Hamburger -->
            <div class="flex items-center gap-2 sm:gap-4">
                <!-- <Button icon="pi pi-align-justify" class="hidden" @click="handleSidebar"></Button> -->
                <NuxtLink :to="dashboardLink" class="lg:hidden">
                    <NuxtImg :src="img" :alt="label" sizes="48px"/>
                </NuxtLink>
            </div>
            
            <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" unstyled class="border border-red-400 rounded-full">
                <NuxtImg class="rounded-full" :src="img" :alt="label" sizes="48px"/> 
            </Button>
        </div>
        <PopupMenu />
    </header>
</template>