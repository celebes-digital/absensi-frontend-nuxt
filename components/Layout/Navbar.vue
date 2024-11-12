<script setup>
	const pending = ref(true);
	const dropdownOpen = ref(false);
	const toggleDropdown = () => {
		dropdown.value = !dropdown.value
	}
	const menuItems = reactive([
		{
			label: 'Home',
			icon: 'pi pi-home',
			route: '/'
		}
	])
</script>

<template>
	<header class="sticky top-0 z-40 flex w-full bg-white drop-shadow-1 shadow-md text-def">
        <div class="flex flex-grow items-center justify-between lg:justify-end px-4 py-4 shadow-2 md:px-6 2xl:px-11">

            <!-- Menus -->
            <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
                <button
                    class="z-50 flex rounded-sm border border-stroke bg-white p-1 shadow-sm w-12 h-12 items-center justify-center lg:hidden"
                    @click="$emit('toggleSidebar')">
                    <i class="pi pi-bars text-2xl"></i>
                </button>

                <RouterLink class="block flex-shrink-0 lg:hidden icon-nav" to="/">
                    <img src="" alt="Logo" class="w-12 h-12"/>
                </RouterLink>
            </div>

			<!-- User Area -->
            <div class="flex items-center gap-3">
                <div class="relative">

                    <button class="flex items-center gap-4" @click="toggleDropdown" aria-haspopup="true" aria-controls="overlay_tmenu">
                        <span class="flex flex-col items-end gap-1" v-if="pending">
                            <Skeleton height="1rem" width="7rem"/>
                            <Skeleton height="0.8rem" width="5rem"/>
                        </span>
                        <span class="text-right sm:block" v-else>
                            <span class="block text-sm font-medium text-black">{{ username }}</span>
                            <span class="block text-xs font-medium">{{ jabatan }}</span>
                        </span>

                        <span class="h-12 w-12 rounded-full">
                            <img src="../assets/app-logo.png"
                                alt="nama-user"
                                class="rounded-full" />
                        </span>

                        <i :class="{'rotate-180' : dropdownOpen}" class="hidden fill-current sm:block transition-all ease-in-out pi pi-angle-down"></i>
                    </button>

                    <TieredMenu ref="menu" id="overlay_tmenu" :model="menuItems" popup >
                        <template #item="{ item, props }">
                            <RouterLink v-slot="{ href, navigate }" :to="item.route" custom>
                                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                                    <span :class="item.icon" />
                                    <span class="ml-2">{{ item.label }}</span>
                                </a>
                            </RouterLink>
                        </template>
                    </TieredMenu>
                </div>
            </div>

        </div>
    </header>
</template>