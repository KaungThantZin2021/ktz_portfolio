<template>
    <div>
        <nav class="fixed top-10 left-20 right-20 flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-start">
                <div class="flex flex-shrink-0 items-center">
                    <NuxtLink 
                        to="/"          
                        class="tracking-wider text-sm font-medium transition ease-in-out duration-300 scale-125 hover:scale-150"
                    >
                        Portfolio
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center pr-2">
                <div class="flex space-x-10">
                    <NuxtLink 
                        to="/"          
                        :class="`text-sm font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/' ? 'scale-125' : ''}`"
                    >
                        Home
                    </NuxtLink>

                    <NuxtLink 
                        to="/skills" 
                        :class="`text-sm font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/skills' ? 'scale-125' : ''}`"
                    >
                        Skills
                    </NuxtLink>
                    

                    <NuxtLink 
                        to="/about" 
                        :class="`text-sm font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/about' ? 'scale-125' : ''}`"
                    >
                        About
                    </NuxtLink>

                    <NuxtLink 
                        to="/contact" 
                        :class="`text-sm font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/contact' ? 'scale-125' : ''}`"
                    >
                        Contact
                    </NuxtLink>

                    <a href="#" @click="toggleDarkMode" class="text-sm font-bold scale-125 transition ease-in-out duration-300 hover:scale-150">
                        <span v-if="isDark">
                            <IconsSun/>
                        </span>
                        <span v-else>
                            <IconsMoon/>
                        </span>
                    </a>

                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
const route = useRoute();
const { isDark, toggleDarkMode } = useDarkMode();
</script>
