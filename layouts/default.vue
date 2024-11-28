<script>
export default {
	data() {
		return {
			sidebarToggle: false
		}
	},
	methods: {
		callback() {
			this.sidebarToggle = !this.sidebarToggle
		}
	}
}
</script>

<template>
	<div class="flex h-screen overflow-hidden bg-[#F1F5F9]">
		<!-- Sidebar -->
        <LayoutSidebar></LayoutSidebar>

		<div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

			<!-- Navbar -->
			<LayoutNavbar @toggleSidebar="callback"></LayoutNavbar>

			<!-- Main Content Area -->
			<div class="grid grid-cols-12 m-5">
				<slot></slot>
			</div>

		</div>
	</div>

</template>