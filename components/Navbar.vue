<template>
    <div>
        <nav class="fixed top-10 left-20 right-20 flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-start">
                <div class="flex flex-shrink-0 items-center">
                    <NuxtLink 
                        to="/"          
                        class="font-semibold tracking-widest transition ease-in-out duration-300 hover:scale-125"
                    >
                        Portfolio
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center pr-2">
                <div class="flex space-x-10">
                    <NuxtLink 
                        to="/"          
                        :class="{
                            'text-sm font-medium scale-125 transition ease-in-out duration-300 hover:scale-150': route.path === '/',
                            'text-sm font-medium transition ease-in-out duration-300 hover:scale-150': route.path !== '/'
                        }"
                    >
                        Home
                    </NuxtLink>

                    <NuxtLink 
                        to="/skills" 
                        :class="{
                            'text-sm font-medium scale-125 transition ease-in-out duration-300 hover:scale-150': route.path === '/skills',
                            'text-sm font-medium transition ease-in-out duration-300 hover:scale-150': route.path !== '/skills'
                        }"
                    >
                        Skills
                    </NuxtLink>
                    

                    <NuxtLink 
                        to="/about" 
                        :class="{
                            'text-sm font-medium scale-125 transition ease-in-out duration-300 hover:scale-150': route.path === '/about',
                            'text-sm font-medium transition ease-in-out duration-300 hover:scale-150': route.path !== '/about'
                        }"
                    >
                        About
                    </NuxtLink>

                    <NuxtLink 
                        to="/contact" 
                        :class="{
                            'text-sm font-medium scale-125 transition ease-in-out duration-300 hover:scale-150': route.path === '/contact',
                            'text-sm font-medium transition ease-in-out duration-300 hover:scale-150': route.path !== '/contact'
                        }"
                    >
                        Contact
                    </NuxtLink>

                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
const route = useRoute();
</script>
