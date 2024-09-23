<template>
    <div>
        <nav class="fixed lg:top-10 md:top-5 lg:left-20 md:left-10 lg:right-20 md:right-10 lg:flex md:flex sm:hidden xs:hidden 2xs:hidden h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-start">
                <div class="flex flex-shrink-0 items-center">
                    <NuxtLink 
                        to="/"          
                        class="tracking-wider lg:text-sm md:text-xs font-medium transition ease-in-out duration-300 scale-125 hover:scale-150"
                    >
                        Portfolio
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center pr-2">
                <div class="flex space-x-10">
                    <NuxtLink 
                        to="/"          
                        :class="`lg:text-sm md:text-xs font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/' ? 'scale-125' : ''}`"
                    >
                        Home
                    </NuxtLink>

                    <NuxtLink 
                        to="/skills" 
                        :class="`lg:text-sm md:text-xs font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/skills' ? 'scale-125' : ''}`"
                    >
                        Skills
                    </NuxtLink>
                    

                    <NuxtLink 
                        to="/about" 
                        :class="`lg:text-sm md:text-xs font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/about' ? 'scale-125' : ''}`"
                    >
                        About
                    </NuxtLink>

                    <NuxtLink 
                        to="/contact" 
                        :class="`lg:text-sm md:text-xs font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/contact' ? 'scale-125' : ''}`"
                    >
                        Contact
                    </NuxtLink>

                    <a href="#" @click="toggleDarkMode" class="lg:text-sm md:text-xs font-bold scale-125 transition ease-in-out duration-300 hover:scale-150">
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
        <nav class="fixed top-8 left-10 right-10 lg:hidden md:hidden sm:flex xs:flex 2xs:flex justify-between items-center">
            <div>
                <NuxtLink 
                    to="/"          
                    class="tracking-wide text-lg font-medium transition ease-in-out duration-300 scale-125 hover:scale-150"
                >
                    Portfolio
                </NuxtLink>
            </div>
            <div class="flex items-center">
                <a href="#" @click="toggleDarkMode" class="text-xl font-bold scale-125 transition ease-in-out duration-300 hover:scale-150">
                    <span v-if="isDark">
                        <IconsSun/>
                    </span>
                    <span v-else>
                        <IconsMoon/>
                    </span>
                </a>
                <a href="#" class="ms-4 text-2xl" @click="toggleNavbar">
                    <span v-if="!showNavbar">
                        <IconsBars/>
                    </span>
                    <span v-else>
                        <IconsClose/>
                    </span>
                </a>
            </div>
        </nav>
        <div class="border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 rounded px-2 fixed top-16 right-10 w-1/3 lg:hidden md:hidden sm:block xs:block 2xs:block" v-if="showNavbar">
            <ul>
                <li class="border-b border-slate-300 dark:border-slate-700 py-2 px-1">
                    <NuxtLink 
                        to="/"          
                        :class="`lg:text-sm md:text-xs font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/' ? 'scale-125' : ''}`"
                    >
                        Home
                    </NuxtLink>
                </li>
                <li class="border-b border-slate-300 dark:border-slate-700 py-2 px-1">
                    <NuxtLink 
                        to="/skills" 
                        :class="`lg:text-sm md:text-xs font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/skills' ? 'scale-125' : ''}`"
                    >
                        Skills
                    </NuxtLink>
                </li>
                <li class="border-b border-slate-300 dark:border-slate-700 py-2 px-1">
                    <NuxtLink 
                        to="/about" 
                        :class="`lg:text-sm md:text-xs font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/about' ? 'scale-125' : ''}`"
                    >
                        About
                    </NuxtLink>
                </li>
                <li class="py-2 px-1">
                    <NuxtLink 
                        to="/contact" 
                        :class="`lg:text-sm md:text-xs font-medium transition ease-in-out duration-300 hover:scale-150 ${route.path === '/contact' ? 'scale-125' : ''}`"
                    >
                        Contact
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const { isDark, toggleDarkMode } = useDarkMode();
const { showNavbar, toggleNavbar } = useResponsiveNavbar();

</script>
