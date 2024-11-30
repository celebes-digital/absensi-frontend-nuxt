<script setup>
	const sidebarToggle = ref(false)

	// Methods
    const handleToggleSidebar = () => {
        sidebarToggle.value = !sidebarToggle.value;
        console.log(sidebarToggle.value)
    }
</script>

<template>
	<div class="flex h-screen overflow-hidden bg-[#F1F5F9]">
		<!-- Sidebar -->
        <LayoutSidebar></LayoutSidebar>

		<div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

			<!-- Header -->
			<LayoutHeader @toggleSidebar="handleToggleSidebar" :dashboardLink="'/'" img="/celebes-logo.png" alt="Logo"></LayoutHeader>

			<!-- Main Content Area -->
			<div class="grid grid-cols-12 m-5">
				<slot></slot>
			</div>
		</div>
	</div>

</template>