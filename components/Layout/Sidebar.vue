<script setup>
    // Data
    const sidebarToggle = ref(false)
    const menubarItems = reactive([
        {
            label: "Menu",
            list: [
                { name: "Home" },
                { name: "User" },
                { name: "Admin" },
            ]
        },
        {
            label: "Menu2",
            list: [
                { name: "Home" },
                { name: "User" },
                { name: "Admin" },
            ]
        }
    ]);
    console.log(menubarItems)

    // Methods
    const handleToggleSidebar = () => {
        sidebarToggle.value = !sidebarToggle.value;
        console.log(sidebarToggle.value)
    }
</script>

<template>
    <aside 
        :class="[sidebarToggle ? 'translate-x-0' : '-translate-x-full']"
        class="absolute left-0 top-0 z-40 flex h-screen w-72 flex-col overflow-y-hidden bg-white shadow-md duration-300 ease-linear lg:static lg:translate-x-0 px-5 py-7"
    >
        <SidebarHeader label="Logo Applikasi" :to="'/'" img="/celebes-logo.png" @toggleSidebar="handleToggleSidebar"></SidebarHeader>

        <SidebarMenus :menubar="menubarItems"></SidebarMenus>
    </aside>
</template>